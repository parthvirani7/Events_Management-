// src/pages/Home.js
import React from 'react';
import EventList from '../components/EventList';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Event Management System</h1>
            <EventList />
        </div>
    );
};

export default Home;
