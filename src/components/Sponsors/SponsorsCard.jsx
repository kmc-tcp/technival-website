import './Sponsors.css'
// import devfolioLogo from '../../assets/images/Devfolio_Logo-Colored.png'

const SponsorsCard = ({imgSrc, link}) => {
    return (
        <>
            <div className='sponsors-card'>
                <a href={link} target="_blank" rel="noopener noreferrer"><img src={imgSrc} alt="" /></a>
            </div>
        </>
    )
}

export default SponsorsCard