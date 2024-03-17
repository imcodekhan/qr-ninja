import { configureStore } from "@reduxjs/toolkit";
import api from "./Services/api";
import productsReducer from "./Features/productsSlice";
import cartReducer from "./Features/cartSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    products: productsReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export default store;
