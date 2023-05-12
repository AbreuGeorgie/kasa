
import ContainerCarousel from './ContainerCarousel';
import RentTitle from './RentTitle';
/* import data from '../../data.json'; */

function Appartment(fiche) {
    const PageAppartmentStyle = {
        display: "flex",
        flexDirection: "column",
        margin: "2em",
      };

    return <div style={PageAppartmentStyle}> 
        <ContainerCarousel pictures={fiche.pictures}/>
        <RentTitle/>
        <div>Lieu de l'appartement</div>
        <tag>Tags de l'appartement</tag>
        <div>Fiche du propriétaire</div>
        <div>description</div>
        <div>Equipements</div>
        </div>
}

export default Appartment