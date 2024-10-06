// src/components/EventDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventDetails = ({ match }) => {
    const [event, setEvent] = useState(null);
    const eventId = match.params.eventId;

    const fetchEvent = async () => {
        const response = await axios.get(`http://localhost:5000/events/${eventId}`);
        setEvent(response.data);
    };

    useEffect(() => {
        fetchEvent();
    }, [eventId]);

    if (!event) return <div>Loading...</div>;

    return (
        <div>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>Date: {new Date(event.date).toLocaleString()}</p>
            <p>Location: {event.location}</p>
            <p>Max Attendees: {event.maxAttendees}</p>
            <img src={event.image} alt={event.title} />
        </div>
    );
};

export default EventDetails;
