// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Event Management System</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/create-event">Create Event</Link>
            </nav>
        </header>
    );
};

export default Header;
