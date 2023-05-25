import data from "../../data.json";
import Rating from "../../components/Rating/Raiting";
import Tag from "../../components/Tag/Tag";
import { useSearchParams } from "react-router-dom";
import Collapse from "../../components/Collapse/Collapse";
import Carousel from "../../components/Carousel/Carousel";
import "./Appartment.scss";

function Appartment() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const fiche = data.filter((fiche) => id === fiche.id)[0];

  return (
    <main>
      <Carousel
        key={`${fiche.id} - pictures`}
        pictures={fiche.pictures}
      />
      <div className="descriptionHeader">
        <div>
          <h1>{fiche.title}</h1>
          <p className="location">{fiche.location}</p>
          <ul className="tagContainer">
            {fiche.tags.map((tag) => (
              <Tag
                key={`${fiche.id} - ${tag}`}
                tagName={tag}
                id={id}
              />
            ))}
          </ul>
        </div>
        <div className="hostAndRatings">
          <div className="host">
            <h3 className="hostName">{fiche.host.name}</h3>
            <img
              className="hostPicture"
              src={fiche.host.picture}
              alt={`propriétaire`}
            ></img>
          </div>
          <Rating
            key={`${fiche.id} - rating`}
            id={fiche.id}
            rating={fiche.rating}
          />
        </div>
      </div>
      <div className="collapseAppartment">
        <div className="collapseDescription">
          <Collapse
            key={`${id} - Description Collapse`}
            title="Description"
            textCollapse={fiche.description}
          />
        </div>
        <div className="collapseDescription">
          <Collapse
            key={`${id} - Equipments Collapse`}
            title="Équipements"
            textCollapse={fiche.equipments}
          />
        </div>
      </div>
    </main>
  );
}

export default Appartment;
