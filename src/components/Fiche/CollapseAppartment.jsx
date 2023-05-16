import Collapse from "../About/Collapse";

function CollapseAppartment(props) {
  const equipments = props.equipments;
  const listEquipments = equipments.map((i, equipment) => (
    <li key={`${i} - ${equipment}`}>{equipment}</li>
  ));
  return (
    <>
      <Collapse title="Description">
        <p>{props.description}</p>
      </Collapse>
      <Collapse title="Equipements">
        <ul>{listEquipments}</ul>
      </Collapse>
    </>
  );
}

export default CollapseAppartment;
