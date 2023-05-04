import AdvertsList from "./AdvertsList"
import '../Gallery.css';

function Gallery() {
    return <div className="gallery">
             <AdvertsList/> 
             <AdvertsList/>  
             <AdvertsList/>  
             <AdvertsList/>  
             <AdvertsList/>   
    </div>
}

export default Gallery