import Collapse from "../Collapse";

function CollapseAppartment({ equipments, description, id }) {
  return (
    <>
      <Collapse
        key={`${id} - Description Collapse`}
        title="Description"
        textCollapse={description}
      />
      <Collapse
        key={`${id} - Equipments Collapse`}
        title="Equipements"
        textCollapse={equipments}
      />
    </>
  );
}

export default CollapseAppartment;
