export interface ErrorsLogin {
  email: string;
  password: string;
}

export interface FormDataLogin {
  email: string;
  password: string;
}

export interface ErrorsRegister {
  name: string;
  email: string;
  password: string;
  direccionEnvio: string;
  role: string;
  googleId: string; // Opcional
  avatar: null; // Opcional
}

export interface FormDataRegister {
  name: string;
  email: string;
  password: string;
  direccionEnvio: string;
  role: string;
  googleId: string; // Opcional
  avatar: null; // Opcional
}

export interface RootState {
  user: {
    user: User;
  };
}

export interface User {
  id: number;
  email: string;
  name: string;
  direccionEnvio: string;
  role: string | null;
  arbolId: string | null;
  password: string;
  googleId: string | null;
  avatar: string | null;
}

export interface CredentialResponse {
  clientId: string;
  credential: string;
  select_by: string;
}

export type GoogleAuthError = {
  error: string;
  details?: string;
  // Definimos propiedades adicionales conocidas
  errorCode?: number;
  errorMessage?: string;
  // Para propiedades desconocidas, usamos un tipo de unión
  [key: string]: string | number | undefined;
};

