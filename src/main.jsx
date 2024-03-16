import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./Provider/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <ToastContainer autoClose={500} />
  </React.StrictMode>
);
