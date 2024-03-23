import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
// import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Profile from "./Pages/ControlPanel";
import Checkout from "./Pages/Checkout";
import Product from "./Pages/Product";
import ControlPanel from "./Pages/ControlPanel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/control-panel/:section",
    element: <ControlPanel />,
  },
  // {
  //   path: "/cart",
  //   element: <Cart />,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
  // {
  //   path: "/profile",
  //   element: <Profile />,
  // },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  // {
  //   path: "/orders",
  //   element: <Orders />,
  // },
  {
    path: "/product/:id",
    element: <Product />,
  },
]);

export default router;
