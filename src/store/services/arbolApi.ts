import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Productor } from '../../components/AdoptarEsteArbol/AdoptarEsteArbol';

// Definimos el tipo de los datos de los árboles
export interface ArbolInterface {
  id: number;
  name: string;
  type: string;
  location: string;
  images: string;
  productor: Productor;
  price: number;
  finca: FincaData;
}

export interface FincaData {
  id: number;
  name: string;
  ubication: string;
  practicesSustainable: string;
  productor: Productor;
}

const BACK_URL = import.meta.env.VITE_BACK_URL;

// Define la API para interactuar con el backend
export const arbolApi = createApi({
  reducerPath: 'arbolApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BACK_URL}` }), // Cambia la URL por la de tu backend
  endpoints: (builder) => ({
    getArboles: builder.query<ArbolInterface[], void>({
      query: () => '/arboles',
    }),
    // Puedes agregar más endpoints aquí si es necesario (GET, POST, etc.)
  }),
});

// Exporta el hook generado por la API
export const { useGetArbolesQuery } = arbolApi;
