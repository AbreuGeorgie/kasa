import logo from "../../assets/logo.png";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img
          className="kasa"
          src={logo}
          alt="logo Kasa"
        />
      </Link>
      <div className="nav">
        <NavLink to="/">
          <div>Accueil</div>
        </NavLink>
        <NavLink to="/About">
          <div>A propos</div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
