import { configureStore } from '@reduxjs/toolkit';
import { userSlice, UserState } from './features/userSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

// Tipar correctamente el selector usando `UserState`
export const useAppSelector: TypedUseSelectorHook<{
  usuario: UserState;
}> = useSelector;
