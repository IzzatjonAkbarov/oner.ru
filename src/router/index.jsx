import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../components/MainLayout";
import Contacts from "../pages/Contacts";
import Payment from "../pages/Payment";

import Cart from "../pages/Cart";

export const rooter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "/",

        Component: Home,
      },
      {
        path: "/contacts",

        Component: Contacts,
      },

      {
        path: "/payments",

        Component: Payment,
      },

      {
        path: "/cart",

        Component: Cart,
      },
    ],
  },
]);
