import { saveProducts } from "../Features/productsSlice";
import api from "./api";

const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => "/products",
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(saveProducts(data));
      },
      providesTags: ["getProducts"],
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
