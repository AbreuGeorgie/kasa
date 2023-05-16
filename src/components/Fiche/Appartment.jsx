import ContainerCarousel from "./ContainerCarousel";
import data from "../../data.json";
import Rating from "./Raiting";
import Tags from "./Tags";
import { useSearchParams } from "react-router-dom";
import CollapseAppartment from "./CollapseAppartment";
import Host from "./Host";
import Title from "./Title";

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
        />
        <CollapseAppartment
          key={`${fiche.id} - description`}
          description={fiche.description}
          equipments={fiche.equipments}
        />
      </div>
    </div>
  );
}

export default Appartment;
