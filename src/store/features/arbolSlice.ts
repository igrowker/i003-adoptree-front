import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  arboles: [],
};

export const ArbolSlice = createSlice({
  name: 'arboles',
  initialState,
  reducers: {
    setArboles: (state, action) => {
      state.arboles = action.payload;
    },
  },
});

export const { setArboles } = ArbolSlice.actions;
