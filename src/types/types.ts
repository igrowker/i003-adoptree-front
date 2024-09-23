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
  googleId: string,  // Opcional
  avatar: null,   // Opcional
}

export interface FormDataRegister {
  name: string;
  email: string;
  password: string;
  direccionEnvio: string;
  role: string;
  googleId: string,  // Opcional
  avatar: null,   // Opcional
}


export interface RootState {
  user: {
    user: User;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  // ... otras propiedades del usuario
}