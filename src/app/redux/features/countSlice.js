import { createSlice } from "@reduxjs/toolkit";

const initialState = 1;

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state, action) => {
      if (state < 5) {
        return state + 1;
      }
      return state; // Devuelve el estado actual si la condición no se cumple
    },
    decrement: (state, action) => {
      if (state > 1) {
        return state - 1;
      }
      return state;
    },
  },
});

export const { increment, decrement } = countSlice.actions;

export default countSlice.reducer;
