import React from "react";
import ReactDOM from "react-dom";
import './style.css'
import App from "./App";
import {
    createBrowserRouter,
    RouterProvider,Route,
  } from "react-router-dom";
import SecondPage from "./secondpage";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "Read",
        element: <SecondPage />,
      },
  ]);

ReactDOM.render(<RouterProvider router={router} />, document.getElementById("root"))