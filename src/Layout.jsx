import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style.scss";

const Layout = ({ children }) => {
  return (
    <div className="page">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;