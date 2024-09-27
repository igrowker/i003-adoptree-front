import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Utiliza localStorage
import { userSlice, UserState } from './features/userSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { arbolApi } from '../store/services/arbolApi'; // Importa la API de árboles

// Configuración de persistencia
const persistConfig = {
  key: 'user', // Nombre del key bajo el cual se guardará el estado en localStorage
  storage,
  whitelist: ['user'], // Sólo persistirá el estado del usuario
};

// Aplicar el reducer persistente al userSlice
const persistedUserReducer = persistReducer(persistConfig, userSlice.reducer);

// Configuración de la store
export const store = configureStore({
  reducer: {
    user: persistedUserReducer, // Aplicamos el reducer persistido
    [arbolApi.reducerPath]: arbolApi.reducer, // Añadimos el reducer de la API de árboles
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(arbolApi.middleware), // Añadimos el middleware de la API
});

// Configuración del persistor para poder utilizar PersistGate
export const persistor = persistStore(store);

// Tipos para dispatch y selector
export const useAppDispatch: () => typeof store.dispatch = useDispatch;

// Tipar correctamente el selector usando `UserState`
export const useAppSelector: TypedUseSelectorHook<{
  user: UserState;
  // Añade el estado de la API para usar el hook selector si lo necesitas
}> = useSelector;
