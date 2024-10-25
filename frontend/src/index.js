import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import Landing from "./Landing.js";
import About from "./aboutUs.js";
import Donate from "./donate.js";
import Community from "./community.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./login.js";
import Signup from "./signup.js";
import Chat from "./product.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Landing /> },
      { path: "aboutus", element: <About /> },
      { path: "donate", element: <Donate /> },
      { path: "community", element: <Community /> },
      { path: "product", element: <Chat /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
