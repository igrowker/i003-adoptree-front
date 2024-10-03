import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Utiliza localStorage
import { userSlice, UserState } from './features/userSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { fincaApi } from './services/fincaApi'; // Importar fincaApi

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
    [fincaApi.reducerPath]: fincaApi.reducer, // Añadir el reducer de fincaApi
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fincaApi.middleware), // Añadir el middleware de fincaApi
});

// Configuración del persistor para poder utilizar PersistGate
export const persistor = persistStore(store);

// Tipos para dispatch y selector
export const useAppDispatch: () => typeof store.dispatch = useDispatch;

// Tipar correctamente el selector usando `UserState`
export const useAppSelector: TypedUseSelectorHook<{
  user: UserState;
}> = useSelector;
