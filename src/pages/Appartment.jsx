import data from "../data.json";
import Rating from "../components/Raiting";
import Tags from "../components/Tags";
import { useSearchParams } from "react-router-dom";
import Collapse from "../components/Collapse";
import Carousel from "../components/Carousel";
import "./Appartment.scss";

function Appartment() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  console.log("a", id);
  const fiche = data.filter((fiche) => id === fiche.id)[0];

  return (
    <div className="appartmentPage">
      <div>
        <Carousel
          key={`${fiche.id} - pictures`}
          pictures={fiche.pictures}
        />
        <div className="descriptionHeader">
        <div>
          <h1>{fiche.title}</h1>
          <p className="location">{fiche.location}</p>
          <Tags
          key={`${fiche.id} - tags`}
          tags={fiche.tags}
          id={fiche.id}
        />
        </div>
        <div className="hostAndRatings">
          <div className="host">
          <h3 className="hostName">{fiche.host.name}</h3>
          <img className="hostPicture" 
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
        <div className="collapseDescription">
        <Collapse
          key={`${id} - Description Collapse`}
          title="Description"
          textCollapse={fiche.description}
        />
        <Collapse
          key={`${id} - Equipments Collapse`}
          title="Équipements"
          textCollapse={fiche.equipments}
        />
        </div>
      </div>
    </div>
  );
}

export default Appartment;
