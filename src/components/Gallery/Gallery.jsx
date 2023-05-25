import data from "../../data.json";
import { Link } from "react-router-dom";
import "./Gallery.scss";

function Gallery() {
  const cards = [];
  for (let i = 0; i < data.length; i++) {
    cards.push(
      <Link
        to={`/appartment?id=${data[i].id}`}
        className="appartment"
        key={data[i].id}
        style={{
          backgroundImage: `url(${data[i].cover})`,
        }}
      >
        <div className="rentName">{data[i].title}</div>
      </Link>
    );
  }
  return <div className="gallery">{cards}</div>;
}

export default Gallery;
