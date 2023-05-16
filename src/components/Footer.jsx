import "../CSS/Footer.css";
import black_logo from "../assets/black_logo.png";

function Footer() {
  return (
    <div className="footer">
      <img
        className="black_logo"
        src={black_logo}
        alt="logo Kasa"
      />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
