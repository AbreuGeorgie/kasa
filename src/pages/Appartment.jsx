import ContainerCarousel from "../components/ContainerCarousel";
import data from "../data.json";
import Rating from "../components/Raiting";
import Tags from "../components/Tags";
import { useSearchParams } from "react-router-dom";
import Host from "../components/Host";
import Title from "../components/Title";
import Collapse from "../components/Collapse";

const PageAppartmentStyle = {
  display: "flex",
  flexDirection: "column",
  margin: "2em",
};

function Appartment() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  console.log("a", id);
  const fiche = data.filter((fiche) => id === fiche.id)[0];

  return (
    <div style={PageAppartmentStyle}>
      <div>
        <ContainerCarousel
          key={`${fiche.id} - pictures`}
          pictures={fiche.pictures}
        />
        <Title
          key={`${fiche.id} - title`}
          title={fiche.title}
          location={fiche.location}
        />
        <Host
          key={`${fiche.id} - host`}
          host={fiche.host}
        />
        <Rating
          key={`${fiche.id} - rating`}
          id={fiche.id}
          rating={fiche.rating}
        />
        <Tags
          key={`${fiche.id} - tags`}
          tags={fiche.tags}
          id={fiche.id}
        />
        <Collapse
          key={`${id} - Description Collapse`}
          title="Description"
          textCollapse={fiche.description}
        />
        <Collapse
          key={`${id} - Equipments Collapse`}
          title="Equipements"
          textCollapse={fiche.equipments}
        />
      </div>
    </div>
  );
}

export default Appartment;
