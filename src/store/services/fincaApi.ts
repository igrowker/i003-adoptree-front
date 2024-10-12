// src/services/fincaApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Finca {
  id: number;
  name: string;
  ubication: string;
  practicesSustainable: string;
  productor: string;
}

const BACK_URL = import.meta.env.VITE_BACK_URL

export const fincaApi = createApi({
  reducerPath: 'fincaApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BACK_URL}`  }),
  endpoints: (builder) => ({
    getFincaData: builder.query<Finca[], void>({
      query: () => '/fincas',
    }),
  }),
});

export const { useGetFincaDataQuery } = fincaApi;
