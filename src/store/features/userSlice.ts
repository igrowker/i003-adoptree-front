import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  user: Record<string, string>; 
  authenticated: boolean;
}

const initialState: UserState = {
  user: {},
  authenticated: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Record<string, string>>) => {
      state.user = action.payload;
    },
    setAuthenticated: (state) => {
      state.authenticated = true;
    },
    logout: (state) => {
      state.user = {};
      state.authenticated = false;
    },
    },
  },
);

// Exportar las acciones
export const { login, setAuthenticated, logout } = userSlice.actions;

// Exportar el reducer
export default userSlice.reducer;
