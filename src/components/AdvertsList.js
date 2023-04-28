
import data from '../data.json';


function AdvertsList() {
    return (

        <ul>
            {data.map((appartment) => 
            (
                <li key={appartment.title}>{appartment.title}</li>
            ))}
        </ul>
            )
}

/* data.map((appartment) => {
    console.log(appartment);
    return (<li>...</li>);
   }); */


export default AdvertsList