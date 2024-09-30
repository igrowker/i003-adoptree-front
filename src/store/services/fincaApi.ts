// src/services/fincaApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fincaApi = createApi({
  reducerPath: 'fincaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/fincas' }),
  endpoints: (builder) => ({
    getFincaData: builder.query({
      query: () => '/finca',
    }),
  }),
});

export const { useGetFincaDataQuery } = fincaApi;
