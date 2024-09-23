import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  user: any;
  authenticated: boolean;
}

const initialState: UserState = {
  user: null,
  authenticated: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    setAuthenticated: (state) => {
      state.authenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.authenticated = false;
    },
  },
});

// Exportar las acciones
export const { login, setAuthenticated, logout } = userSlice.actions;

// Exportar el reducer
export default userSlice.reducer;
