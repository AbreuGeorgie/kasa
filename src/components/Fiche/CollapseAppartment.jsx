import Collapse from "../About/Collapse";

function CollapseAppartment({description, equipments}) {
  return (
    <>
      <Collapse title="Description">
        <p>{description}</p>
      </Collapse>
      <Collapse title="Equipements">
        <p>{equipments}</p>
      </Collapse>
    </>
  );
}

export default CollapseAppartment;
