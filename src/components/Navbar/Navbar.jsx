import './Navbar.css'
import logo from '../../assets/images/logo.png'
import hamburger from '../../assets/images/hamburger.png'
import cross from '../../assets/images/cross.png'
import { useState } from 'react'

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false)
    const handleClick = () => {
        setIsClicked(!isClicked)
    }
    return (
        <nav className='nav-container'>
            <div className='nav'>
                <div>
                    <a href="/"><img src={logo} alt='logo' className='tcp-logo' width={80}/></a>
                </div>
                <div className='nav-mobile'>
                    <img src={hamburger} alt="" onClick={handleClick} />
                </div>
                <div className={isClicked? 'nav-link-container active': 'nav-link-container'}>
                    <div className='nav-mobile'>
                        <img src={cross} alt="" onClick={handleClick} />
                    </div>
                    <a href="#about" className='nav-link'>About Technival</a>
                    <a href="#events" className='nav-link'>Events</a>
                    <a href="#sponsors" className='nav-link'>Sponsors</a>
                    <a href="#contact" className='nav-link'>Contact Us</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar