import AdvertsList from "./AdvertsList"
import '../CSS/Gallery.css';

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