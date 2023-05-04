import logo from '../assets/logo.png'
import '../header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return <nav className='navbar'>
        <img src={logo} alt="logo Kasa" />
        <div className='nav'>
            <NavLink to="/">
                <div>Accueil</div>
                </NavLink>
            <NavLink to="/About">
                <div>A propos</div>
                </NavLink>
        </div>
    </nav>
}

export default Header