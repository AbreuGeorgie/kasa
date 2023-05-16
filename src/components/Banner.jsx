import vagues from "../assets/vagues.png";

const bannerStyle = {
  display: "flex",
  height: "17vh",
  width: "100%",
  marginTop: "2rem",
}

const imageBannerStyle = {
  objectFit: "cover",
  height: "100%",
  width: "100%",
  borderRadius: "1em",
  filter: "brightness(50%)",
}

const textBannerStyle = {
  position: "absolute",
  top: "29%",
  left: "23%",
  zIndex: "1",
  color: "white",
  fontSize: "30px",
  fontWeight: "500",
}

/* media queries pour format mobile  
centrer le texte réellement sur l'image */

function Banner() {
  return (
    <div style={bannerStyle}>
      <img
        style={imageBannerStyle}
        src={vagues}
        alt="vagues contre une falaise"
      />
      <div style={textBannerStyle}>Chez vous, partout et ailleurs</div>
    </div>
  );
}

export default Banner;
