import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ShopContextProvider } from "./components/context/Cartcontext/inex";

import { RouterProvider } from "react-router-dom";
import { rooter } from "./router";

import "./index.css";
import { ToastContainer } from "react-toastify";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShopContextProvider>
      <RouterProvider router={rooter} />
      <ToastContainer />
    </ShopContextProvider>
  </StrictMode>
);
