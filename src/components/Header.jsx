import logo from '../assets/logo.png'

function Header() {
    return <nav>
        <img src={logo} alt="logo Kasa" />
        <div>Accueil</div>
        <div>A propos</div>

    </nav>
}

export default Header