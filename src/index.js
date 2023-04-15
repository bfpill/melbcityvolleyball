import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.js";
import About from "./pages/About";
import Root from "./pages/Root";
import Photos from "./pages/Photos"
import Contact from "./pages/Contact";
import ErrorPage from "./pages/error-page";

import Login from "./components/Login.js";
import Reset from "./components/Reset.js";
import Register from "./components/Register.js";
import Dashboard from "./components/Dashboard.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Login",
        element: <Login/>
      },
      {
        path: "/Contact",
        element: <Contact/>
      },
      {
        path: "/register", 
        element: <Register/>
      },
      {
        path: "/Reset", 
        element: <Reset/>
      },
      {
        path: "/Dashboard", 
        element: <Dashboard/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
