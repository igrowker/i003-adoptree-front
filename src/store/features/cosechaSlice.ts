import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cosechas: [],
};

export const cosechaSlice = createSlice({
  name: "cosechas",
  initialState,
  reducers: {
    setCosechas: (state, action) => {
      state.cosechas = action.payload;
    },
  },
});

export const { setCosechas } = cosechaSlice.actions;
