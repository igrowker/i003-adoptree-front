import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Definimos el tipo de los datos de los árboles
interface Arbol {
  id: number;
  name: string;
  type: string;
  location: string;
  imageUrl: string;
  productor: string;
  price: number;
}

// Define la API para interactuar con el backend
export const arbolApi = createApi({
  reducerPath: 'arbolApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }), // Cambia la URL por la de tu backend
  endpoints: (builder) => ({
    getArboles: builder.query<Arbol[], void>({
      query: () => '/arboles',
    }),
    // Puedes agregar más endpoints aquí si es necesario (GET, POST, etc.)
  }),
});

// Exporta el hook generado por la API
export const { useGetArbolesQuery } = arbolApi;
