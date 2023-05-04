import { Link } from 'react-router-dom';
import '../Gallery.css';

// import data from '../data.json';


function AdvertsList() {
    return <div className="appartment">
        <Link to="/Fiches"><div className='rentName'>Titre de la location</div></Link>
        </div>


        // <ul>
        //     {data.map((appartment) => 
        //     (
        //         <li key={appartment.title}>{appartment.title}</li>
        //     ))}
        // </ul>
            
}

/* data.map((appartment) => {
    console.log(appartment);
    return (<li>...</li>);
   }); */


export default AdvertsList