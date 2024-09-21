import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Definir el tipo del estado
interface UserState {
  user: Record<string, unknown>; // Puedes cambiar el tipo de 'any' si conoces la estructura del usuario
  authenticated: boolean;
  userAppointments: unknown[]; // Si sabes la estructura de las citas, cambia 'any' por el tipo adecuado
}

const initialState: UserState = {
  user: {},
  authenticated: false,
  userAppointments: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Record<string, unknown>>) => {
      state.user = action.payload;
    },
    setAuthenticated: (state) => {
      state.authenticated = true;
    },
    setUnAuthenticated: (state) => {
      state.user = {};
      state.authenticated = false;
    },
  },
});

// Exportar las acciones
export const { setUser, setAuthenticated, setUnAuthenticated } =
  userSlice.actions;

// Exportar el reducer
export default userSlice.reducer;
