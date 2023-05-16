import data from "../data.json";
import { Link } from "react-router-dom";

const galleryStyle = {
  display: "flex",
  flexWrap: "wrap",
  backgroundColor: "#F6F6F6",
  marginTop: "2em",
  borderRadius: "1em",
  alignContent: "flex-start",
  justifyContent: "space-between",
  minHeight: "20rem",
  padding: "2rem",
  gap: "1rem",
};

const appartmentStyle = {
  backgroundImage: "linear-gradient(180deg, #FF6060 0%, #660f0fb7 100%)",
  flexBasis: "30%",
  minWidth: "200px",
  minHeight: "200px",
  borderRadius: "0.5em",
  display: "flex",
  placeItems: "end start",
};

const rentNameStyle = {
  width: "12em",
  textAlign: "left",
  padding: "0.5rem",
  color: "white",
  fontSize: "14px",
  textDecoration: "none",
  zIndex: "1",
};

function Gallery() {
  const cards = [];
  for (let i = 0; i < data.length; i++) {
    const backgroundImage = {
      ...appartmentStyle,
      backgroundImage: `url(${data[i].cover})`,
    };
    cards.push(
      <Link
        to={`/appartment?id=${data[i].id}`}
        style={backgroundImage}
        key={data[i].id}
      >
        <div style={rentNameStyle}>{data[i].title}</div>
      </Link>
    );
  }
  return <div style={galleryStyle}>{cards}</div>;
}

export default Gallery;
