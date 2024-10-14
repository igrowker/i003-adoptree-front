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
  avatar: string | null; // Opcional
}

export interface RootState {
  user: {
    user: User;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    shippingAddresses: any[];
  };
}

export interface User {
  id: number;
  email: string;
  name: string;
  direccionEnvio: string;
  role: string;
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
  statusTree: string;
  type: string;
  price: string;
  user: {
    name: string;
  };
}

interface Productor {
  id: number;
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
  direccion: string | null;
  experiencia: number;
  especialidad: string;
  certificaciones: string[];
  fincaId: number;
}

export interface Hacienda {
  id: number;
  name: string;
  ubication: string;
  practicesSustainable: string;
  images: string[];
  arbol: Arbol[];
  productor: Productor;
}

