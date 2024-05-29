import { createSlice } from "@reduxjs/toolkit";
const products = JSON.parse(localStorage.getItem("cart")) || [];
const initialState = {
  products,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const idx = state.products.findIndex(
        (prod) => prod.id_product === product.id_product
      );
      if (idx != -1) {
        console.log("cantidad incrementada");
        state.products[idx].count += product.count;
      } else {
        console.log("el producto no existe");
        state.products.push(product);
      }
    },
    deleteProduct: (state, action) => {
      const product = action.payload;
      console.log(product);
      state.products = state.products.filter(
        (prod) => prod.id_product != product.id_product
      );
    },
  },
});

export const { addToCart, editQuantity, deleteProduct } = cartSlice.actions;

export default cartSlice.reducer;
