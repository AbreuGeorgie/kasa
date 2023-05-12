
import ContainerCarousel from './ContainerCarousel';

function Appartment() {
    const PageAppartmentStyle = {
        display: "flex",
        flexDirection: "column",
        margin: "2em",
      };

    return <div style={PageAppartmentStyle}> 
        <ContainerCarousel/>
        <div>Titre de la location</div>
        <div>Lieu de l'appartement</div>
        <tag>Tags de l'appartement</tag>
        <div>Fiche du propriétaire</div>
        <div>description</div>
        <div>Equipements</div>
    </div>
}

export default Appartment