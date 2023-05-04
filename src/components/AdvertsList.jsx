import '../Gallery.css';

// import data from '../data.json';


function AdvertsList() {
    return <div className="gallery">
    <div className='appartment'>
        <div className='rentName'>Titre de la location</div>
        </div>
    <div className='appartment'>
        <div className='rentName'>Titre de la location</div>
        </div>
    <div className='appartment'>
        <div className='rentName'>Titre de la location</div>
        </div>
    <div className='appartment'>
        <div className='rentName'>Titre de la location</div>
        </div>
    <div className='appartment'>
        <div className='rentName'>Titre de la location</div>
        </div>
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