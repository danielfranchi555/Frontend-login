import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import countSlice from "./features/countSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    count: countSlice,
  },
});
