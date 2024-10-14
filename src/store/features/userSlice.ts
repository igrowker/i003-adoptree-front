import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/types';

export interface UserState {
  user: User | null;
  authenticated: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  shippingAddresses: any[];
}

const initialState: UserState = {
  user: null,
  authenticated: false,
  shippingAddresses: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.authenticated = true;
    },
    setAuthenticated: (state) => {
      state.authenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.authenticated = false;
    },
    setShippingAddresses: (state, action) => {
      state.shippingAddresses.push(action.payload);
    },
  },
});

// Exportar las acciones
export const { login, setAuthenticated, logout, setShippingAddresses } =
  userSlice.actions;

// Exportar el reducer
export default userSlice.reducer;
