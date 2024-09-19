import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Usuario {
    id: number;
    nombre: string;
    correo: string;
    direccionEnvio: string;
}

export interface UsuarioState {
    usuarios: Usuario[];
}

const initialState: UsuarioState = {
    usuarios: [],
};

export const UsuarioSlice = createSlice({
    name: "usuario",
    initialState,
    reducers: {
        addUsuario: (state, action: PayloadAction<{nombre: string, correo: string, direccionEnvio: string}>) => {
            state.usuarios.push({
                id: state.usuarios.length + 1,
                nombre: action.payload.nombre,
                correo: action.payload.correo,
                direccionEnvio: action.payload.direccionEnvio,
            })
        },
    },
});

export default UsuarioSlice.reducer;
export const { addUsuario } = UsuarioSlice.actions;