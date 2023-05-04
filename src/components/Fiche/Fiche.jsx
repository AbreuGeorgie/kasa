import Header from '../Header';
import Caroussel from './Caroussel';
import Appartment from './Appartment';
import Footer from '../Footer';

function Fiche() {
    return (
      <div className="Fiche">
        <Header/>
        <Caroussel/>
        <Appartment/>
        <Footer/>
      </div>
    );
  }
  
  export default Fiche;