import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { _id } = action.payload;
      const existingProductIndex = state.products.findIndex(
        (product) => product._id === _id
      );

      if (existingProductIndex === -1) {
        // If product doesn't exist in cart, add it with quantity 1
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },

    increaseQuantity(state, action) {
      const { _id } = action.payload;
      const existingProduct = state.products.find(
        (product) => product._id === _id
      );

      if (existingProduct) {
        // If product exists in cart, increase its quantity
        existingProduct.quantity++;
      }
    },

    removeFromCart(state, action) {
      const { _id } = action.payload;
      const existingProductIndex = state.products.findIndex(
        (product) => product._id === _id
      );

      if (existingProductIndex !== -1) {
        // If product exists in cart, remove it
        state.products.splice(existingProductIndex, 1);
      }
    },

    decreaseQuantity(state, action) {
      const { _id } = action.payload;
      const existingProduct = state.products.find(
        (product) => product._id === _id
      );

      if (existingProduct) {
        // If product exists in cart, decrease its quantity or remove it if quantity is 1
        if (existingProduct.quantity > 1) {
          existingProduct.quantity--;
        } else {
          const existingProductIndex = state.products.findIndex(
            (product) => product._id === _id
          );
          state.products.splice(existingProductIndex, 1);
        }
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
