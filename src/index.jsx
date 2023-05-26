import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ErrorPage from "./pages/Error/error-page";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import "./style.scss";
import Appartment from "./pages/Appartment/Appartment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    //errorElement: <ErrorPage />,
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
      {
        path: "*", 
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/* createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/appartment" element={<Appartment />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
); */