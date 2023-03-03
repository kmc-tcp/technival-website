import bgVideo from '../../assets/videos/bg_trim.mp4'
import './Hero.css'

const Hero = () => {
    return (
        <section className='background-video-container '>
            <video autoPlay loop muted src={bgVideo}>Background Video</video>
            <div className="content">
                <div>
                    <h1 className="main-heading">TECHNIVAL 7.O</h1>
                    <p>Annual Tech Fest of Kirori Mal College</p>  
                </div>
                <div>
                    <p className='date'>27 March 2023</p>
                </div>
                <div>
                    <a href="#events" className="register-button"> Explore Events </a>
                </div>
            </div>
        </section>
    )
}

export default Hero