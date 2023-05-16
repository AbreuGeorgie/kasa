import black_logo from "../assets/black_logo.png";

const footerStyle = {
  color: "white",
  backgroundColor: "black",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "2rem",
  fontSize: "22px",
};

const blackLogoStyle = {
  height: "65px",
  width: "130px",
};

function Footer() {
  return (
    <footer style={footerStyle}>
      <img
        style={blackLogoStyle}
        src={black_logo}
        alt="logo Kasa"
      />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
