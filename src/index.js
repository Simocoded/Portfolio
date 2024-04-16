import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App';
import About from "./Components/About/About";
import Project from "./Components/Projectss/Project";
import Contact from "./Components/Contact/Contact";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "/about",
    element:<About/>,
  },
  {
    path: "/project",
    element:<Project/>,
  },
  {
    path: "/contact",
    element:<Contact/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);