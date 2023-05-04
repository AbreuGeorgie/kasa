import '../Banner.css';
import vagues from "../assets/vagues.png"

function Banner() {
    return <div className='banner'>
        <img className="image_banner" src={vagues} alt="vagues contre une falaise" />
        <div className="text_banner">Chez vous, partout et ailleurs</div>
    </div>
}

export default Banner