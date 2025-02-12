import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../components/MainLayout";
import Contacts from "../pages/Contacts";
import Payment from "../pages/Payment";

import Cart from "../pages/Cart";
import Like from "../pages/Like";

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
        path: "/like",

        Component: Like,
      },

      {
        path: "/cart",

        Component: Cart,
      },
    ],
  },
]);
