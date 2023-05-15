
import ContainerCarousel from './ContainerCarousel';
//import RentInformations from './RentInformations';
import data from '../../data.json';

const PageAppartmentStyle = {
  display: "flex",
  flexDirection: "column",
  margin: "2em",
};

function Appartment() {
return (
  
        <div style={PageAppartmentStyle}> 
        {data.map(fiche => (
          <div>
          <ContainerCarousel key={fiche.id} pictures = {fiche.pictures}/>
          {/* <RentInformations key={fiche.id} 
                id={fiche.id}
                title = {fiche.title}
                description = {fiche.description}
                host = {fiche.host}
                rating = {fiche.rating}
                location = {fiche.location}
                equipments = {fiche.equipments}
                tags = {fiche.tags} /> */}
                </div>
      ))} </div>)}

/*               <div key={data[i].id}>
                {data[i].id}
                {data[i].title}
                {data[i].cover}
                {data[i].pictures}
                {data[i].description}
                {data[i].host}
                {data[i].rating}
                {data[i].location}
                {data[i].equipments}
                {data[i].tags}
                  </div> */

/* <RentTitle key={data[i].id} title = {data[i].title}/>
        <RentLocation location = {data[i].location}/>
        <RentTags tags = {data[i].tags} />
        <HostForm host = {data[i].host} />
        <RentDescription desciption = {data[i].description}/>
        <RentEquipments equipments = {data[i].equipments}/>  */


export default Appartment