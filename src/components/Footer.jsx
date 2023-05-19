import black_logo from "../assets/black_logo.png";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img
        className="blackLogo"
        src={black_logo}
        alt="logo Kasa"
      />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
  }

export default Footer;
