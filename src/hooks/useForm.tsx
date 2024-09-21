import { useState, useEffect, useMemo, ChangeEvent } from 'react';

// Definir el tipo para las validaciones
type FormValidations<T> = {
  [K in keyof T]?: [(value: T[K]) => boolean, string];
};

// Definir el tipo para el estado de validación
type FormValidationState<T> = {
  [K in keyof T as `${string & K}Valid`]?: string | null;
};

// Hook tipado para cualquier formulario
export const useForm = <T extends Record<string, any>>(
  initialForm: T,
  formValidations: FormValidations<T> = {}
) => {
  const [formState, setFormState] = useState<T>(initialForm);
  const [formValidation, setFormValidation] = useState<FormValidationState<T>>(
    {}
  ); // validación de formulario

  useEffect(() => {
    createValidators();
  }, [formState]);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue as keyof FormValidationState<T>] !== null)
        return false;
    }
    return true;
  }, [formValidation]);

  const onInputChange = ({
    target,
  }: ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckedValues: FormValidationState<T> =
      {} as FormValidationState<T>;

    for (const formField of Object.keys(formValidations) as (keyof T)[]) {
      const [fn, errorMessage] = formValidations[formField]!;

      // Aquí estamos haciendo una conversión explícita para asegurar que TypeScript permita la escritura
      (formCheckedValues as Record<string, string | null>)[
        `${String(formField)}Valid`
      ] = fn(formState[formField]) ? null : errorMessage;
    }

    setFormValidation(formCheckedValues);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,

    ...formValidation,
    isFormValid,
  };
};
