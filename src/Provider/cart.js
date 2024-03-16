import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const isProductAlreadyAdded = state.products.findIndex(
        (product) => action.payload.id === product.id
      );
      if (isProductAlreadyAdded !== -1) {
        state.products[isProductAlreadyAdded].quantity++;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const isProductAlreadyAdded = state.products.findIndex(
        (product) => action.payload.id === product.id
      );
      if (
        isProductAlreadyAdded !== -1 &&
        state.products[isProductAlreadyAdded].quantity > 1
      ) {
        state.products[isProductAlreadyAdded].quantity--;
      } else {
        state.products.splice(action.payload);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
