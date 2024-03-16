import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";

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
]);

export default router;
