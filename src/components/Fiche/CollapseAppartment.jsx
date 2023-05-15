import Collapse from '../About/Collapse';

function CollapseAppartment(props) {
    return (
        <>
        <Collapse title="Description">
        <p>{props.description}</p>
        </Collapse>
        <Collapse title="Equipements">
        <p>{props.equipments}</p>
        </Collapse>
        </>
    );
  }
  
  export default CollapseAppartment;
