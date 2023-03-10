const EventItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <h3 className="item-name">
                {data.title}
            </h3>
            <time>{data.time}</time>
            <p>{data.text}</p>
            {data.hackathon? 
                <div className="apply-button" data-hackathon-slug="dev-hacks" data-button-theme="light" style={{height: '44px', width: '312px'}}></div>
            : (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )}
            <span className="circle" />
        </div>
    </div>
);

export default EventItem