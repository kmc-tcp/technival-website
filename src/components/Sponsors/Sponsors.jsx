import './Sponsors.css'
import SponsorsCard from './SponsorsCard'
import { sponsorData } from './SponsorData'

const Sponsors = () => {
    return (
        <section className='sponsors' id='sponsors'>
            <div>
                <p className="heading">Sponsors</p>
            </div>
            <div>
                {sponsorData.map((data, idx) => {
                    return (
                    <div key={idx}>
                        <div className='sponsor-title'>
                            <p> {data.title} </p>
                        </div>
                        <div className='sponsors-card-container'>
                            {data.imgSrc?data.imgSrc.map((img,imgIdx) => <SponsorsCard imgSrc={img} key={imgIdx}/>)
                            : 
                            <p className='sponsor-title coming-soon'>Coming Soon...</p>}
                        </div>
                    </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Sponsors