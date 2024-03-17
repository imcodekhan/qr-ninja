// features/apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["getProducts"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://qr-ninja-backend.onrender.com/api",
    credentials: "same-origin",
    mode: "cors",
  }),
  endpoints: () => ({}),
});

export default api;
