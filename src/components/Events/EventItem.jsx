const EventItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <h3 className="item-name">
                {data.title}
            </h3>
            <time>{data.time}</time>
            <p>{data.text}</p>
            {data.link && (
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