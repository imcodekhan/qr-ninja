import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { useGetProductsQuery } from "./Redux/Services/productsApi.js";

const App = () => {
  useGetProductsQuery();

  return <RouterProvider router={router} />;
};
export default App;
