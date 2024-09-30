// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { fincaApi } from '../store/services/fincaApi'; // Importamos la API

// Importa otros reducers que ya estés usando (si es necesario)
// import someOtherReducer from './someOtherSlice';

export const store = configureStore({
  reducer: {
    // Aquí puedes agregar otros reducers que tengas
    // someOtherState: someOtherReducer,

    // Reducer de fincaApi
    [fincaApi.reducerPath]: fincaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fincaApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
