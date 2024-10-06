// src/pages/Event.js
import React from 'react';
import EventDetails from '../components/EventDetails';

const Event = ({ match }) => {
    return (
        <div>
            <EventDetails match={match} />
        </div>
    );
};

export default Event;
