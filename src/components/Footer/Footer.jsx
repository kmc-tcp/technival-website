import './Footer.css'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import linkedin from '../../assets/images/linkedin.svg'
import twitter from '../../assets/images/twitter.svg'
const Footer = () => {
    return (
        <footer id='contact'>
            <div>
                <p>Contact us:</p>
                <a href="mailto:cs_tcp@kmc.du.ac.in" className='contact-link'>cs_tcp@kmc.du.ac.in</a>
            </div>
            <div>
                <p>&#169; 2023 The Computer Prodigies, Kirori Mal College</p>
                <p style={{textAlign: 'center'}}>
                    Developed with ❤ by team TCP
                </p>
            </div>
            <div>
                <div className="guest-socials">
                    <p> Follous us:</p>
                    <a href="https://www.instagram.com/kmc.tcp/" target={"_blank"} rel={"noreferrer"}><img src={instagram} alt="" /></a>
                    <a href="https://www.facebook.com/cstcp/" target={"_blank"} rel={"noreferrer"}><img src={facebook} alt="" /></a>
                    <a href="https://www.linkedin.com/in/the-computer-prodigies-889323234/" target={"_blank"} rel={"noreferrer"}><img src={linkedin} alt="" /></a>
                    <a href="https://twitter.com/kmc__tcp" target={"_blank"} rel={"noreferrer"}><img src={twitter} alt="" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer