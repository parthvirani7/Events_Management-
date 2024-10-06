// src/components/EventForm.js
import React, { useState } from 'react';
import axios from 'axios';

const EventForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [maxAttendees, setMaxAttendees] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newEvent = {
                title,
                description,
                date,
                location,
                maxAttendees,
                image,
            };
            await axios.post('http://localhost:5000/events', newEvent);
            // Reset form fields
            setTitle('');
            setDescription('');
            setDate('');
            setLocation('');
            setMaxAttendees('');
            setImage('');
        } catch (error) {
            console.error('Error creating event:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} required />
            <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
            <input type="number" placeholder="Max Attendees" value={maxAttendees} onChange={(e) => setMaxAttendees(e.target.value)} required />
            <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
            <button type="submit">Create Event</button>
        </form>
    );
};

export default EventForm;
