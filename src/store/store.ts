import { configureStore } from "@reduxjs/toolkit";
import { UsuarioSlice } from "./features/usuarioSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


export const store = configureStore({
    reducer: {
        usuario: UsuarioSlice.reducer,
    },
});


export const useAppDispatch: () => typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;