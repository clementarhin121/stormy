import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import View from "./Pages/View.jsx";
import User from "./Contexts/User.jsx";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },

  { path: "/view", element: <View /> },
]);

createRoot(document.getElementById("root")).render(
  <User>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </User>
);
