import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Definimos el tipo de los datos de los árboles
export interface Arbol {
  id: number;
  name: string;
  type: string;
  location: string;
  images: string[]; // Esto es un array en el backend, fue cambiado para evitar errores
  productor: string;
  price: number;
  finca: FincaData;
}

export interface FincaData {
  id: number;
  name: string;
  ubication: string;
  practicesSustainable: string;
  // Se agrego la data del productor segun la respuesta del back 👇
  productor: {
    nombre: string;
    apellido: string;
    telefono: string;
    email: string;
    experiencia: number;
    especialidad: string;
    certificaciones: string[];
  };
}

const BACK_URL = import.meta.env.VITE_BACK_URL

// Define la API para interactuar con el backend
export const arbolApi = createApi({
  reducerPath: 'arbolApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BACK_URL}` }), // Cambia la URL por la de tu backend
  endpoints: (builder) => ({
    getArboles: builder.query<Arbol[], void>({
      query: () => '/arboles',
    }),
    // Puedes agregar más endpoints aquí si es necesario (GET, POST, etc.)
  }),
});

// Exporta el hook generado por la API
export const { useGetArbolesQuery } = arbolApi;
