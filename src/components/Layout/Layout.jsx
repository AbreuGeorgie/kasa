import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../../style.scss";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

function Layout() {
  useEffect(() => {
    document.title = "Kasa";
  }, []);
  return (
    <div className="page">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
