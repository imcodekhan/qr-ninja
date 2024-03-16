import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Checkout from "./Pages/Checkout";
import Orders from "./Pages/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
]);

export default router;
