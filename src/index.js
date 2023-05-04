import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./components/App";
import ErrorPage from "./error-page";
import Fiche from "./components/Fiche/Fiche";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
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
    element: <Fiche/>,
    errorElement: <ErrorPage />,
  }
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
