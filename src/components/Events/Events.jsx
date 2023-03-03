
import { eventDetail } from "./EventDetail";
import EventItem from "./EventItem";
import "./Events.css"

const Events = () => {
    return (
        <section name='events' id="events">
            <p className="event-heading">Events at Technival 7.O</p>
            <div className="timeline-container">
                {eventDetail.map((data, idx) => (
                    <EventItem data={data} key={idx} />
                ))}
            </div>
        </section>
    )
}

export default Events