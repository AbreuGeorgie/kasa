import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./CSS/index.css";
import App from "./components/Home";
import ErrorPage from "./error-page";
import Fiche from "./components/Fiche/Fiche";
import About from "./components/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    /* children: [        route enfants ici
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ], */
  },
  {
    path: "/fiches",
    element: <Fiche />,
  },
  {
    path: "/About",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/* import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
); */
