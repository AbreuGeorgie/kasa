
import ContainerCarousel from './ContainerCarousel';
import RentInformations from './RentInformations';
import data from '../../data.json';
import Rating from './Raiting';
import Tags from './Tags';
import { useSearchParams } from "react-router-dom";
import CollapseAppartment from './CollapseAppartment';

const PageAppartmentStyle = {
    display: "flex",
    flexDirection: "column",
    margin: "2em",
  };

  const tagContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "5px",
    padding: "0",
    margin: "25px 0"
}
      

function Appartment() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id")
  console.log("a",id)
  const fiche = data.filter(fiche => id === fiche.id)[0]
  
return (
  
    <div style={PageAppartmentStyle}> 
        <div>
          <ContainerCarousel key={`${fiche.id} - pictures`} pictures = {fiche.pictures}/>
          <RentInformations key={fiche.title} 
                id={fiche.id}
                title = {fiche.title}
                host = {fiche.host}
                location = {fiche.location}
                equipments = {fiche.equipments}/>
          <Rating key={`${fiche.id} - rating`} id={fiche.id} rating = {fiche.rating}/>
          <Tags style={tagContainerStyle} key={`${fiche.id} - tags`} tags={fiche.tags} />
          <CollapseAppartment key={`${fiche.id} - description`} description = {fiche.description} equipments = {fiche.equipments}/>
        </div>
    </div>)}

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