import './Sponsors.css'
// import devfolioLogo from '../../assets/images/Devfolio_Logo-Colored.png'

const SponsorsCard = ({imgSrc}) => {
    return (
        <>
            <div className='sponsors-card'>
                <img src={imgSrc} alt="" />
            </div>
        </>
    )
}

export default SponsorsCard