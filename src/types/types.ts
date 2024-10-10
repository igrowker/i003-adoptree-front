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
    shippingAddresses: any[]
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

export interface UserFinca {
  name: string;
}

export interface Arbol {
  active: boolean;
  statusTree: 'ARBOL_JOVEN' | string; // Puedes agregar más valores si los conoces
  type: string;
  user: UserFinca;
}

export interface Hacienda {
  id: number;
  name: string;
  ubication: string;
  practicesSustainable: string;
  arbol: Arbol[];
}
