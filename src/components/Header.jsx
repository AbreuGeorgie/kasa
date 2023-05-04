import logo from '../assets/logo.png'
import '../header.css';

function Header() {
    return <nav className='navbar'>
        <img src={logo} alt="logo Kasa" />
        <div className='nav_links'>
            <a href>Accueil</a>
            <a href>A propos</a>
        </div>
    </nav>
}

export default Header