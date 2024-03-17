import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer autoClose={500} />
  </React.StrictMode>
);
