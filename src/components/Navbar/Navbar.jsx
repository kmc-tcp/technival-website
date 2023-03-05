import './Navbar.css'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
    return (
        <nav className='nav'>
            <div>
                <img src={logo} alt='logo' width={80}/>
            </div>
            <div className='nav-link-container'>
                <a href="#about" className='nav-link'>About Technival</a>
                <a href="#events" className='nav-link'>Events</a>
                <a href="#sponsors" className='nav-link'>Sponsors</a>
                <a href="#contact" className='nav-link'>Contact Us</a>
            </div>
        </nav>
    )
}

export default Navbar