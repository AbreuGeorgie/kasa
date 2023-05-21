import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "./pages/error-page";
import Home from "./pages/Home";
import About from "./pages/About";
import "./style.scss";
import Appartment from "./pages/Appartment";

/* const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/appartment"
            element={<Appartment />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="*"
            element={<ErrorPage />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
); */
/* import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "./pages/error-page";
import Home from "./pages/Home";
import Fiche from "./pages/Fiche";
import About from "./pages/About";
import "./app.scss"; */

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/appartment",
        element: <Appartment />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
); 
