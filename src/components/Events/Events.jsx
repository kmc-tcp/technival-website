
import { eventDetail } from "./EventDetail";
import EventItem from "./EventItem";
import "./Events.css"
import guestImg from '../../assets/images/rj-naved.webp'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import youtube from '../../assets/images/youtube.svg'

const Events = () => {
    return (
        <section name='events' id="events">
            <p className="event-heading">Events at Technival 7.O</p>
            <div className="timeline-container">
                {eventDetail.map((data, idx) => (
                    <EventItem data={data} key={idx} />
                ))}
            </div>
            <div className="guest">
                <p className="event-heading">Guest of the day</p>
                <div className="guest-img">
                    <img src={guestImg} alt="" />
                </div>
                <div className="guest-name">
                    <p className="event-heading">RJ Naved</p>
                </div>
                <div className="guest-socials">
                    <a href="https://www.instagram.com/rjnaved/" target={"_blank"} rel={"noreferrer"}><img src={instagram} alt="" /></a>
                    <a href="https://www.facebook.com/rjnaved/" target={"_blank"} rel={"noreferrer"}><img src={facebook} alt="" /></a>
                    <a href="https://www.youtube.com/channel/UCnxR2m8Z70_ORJpamIk_hUA" target={"_blank"} rel={"noreferrer"}><img src={youtube} alt="" /></a>
                </div>
            </div>
        </section>
    )
}

export default Events