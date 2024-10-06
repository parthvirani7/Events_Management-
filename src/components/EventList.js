// src/components/EventList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EventList = () => {
    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        const response = await axios.get('http://localhost:5000/events');
        setEvents(response.data);
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <div>
            <h2>Upcoming Events</h2>
            <ul>
                {events.map((event) => (
                    <li key={event._id}>
                        <Link to={`/events/${event._id}`}>
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                            <p>{new Date(event.date).toLocaleString()}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
    