const express = require('express');
const { createEvent, getEvents,updateEvent,deleteEvent } = require('../controllers/eventController');
const router = express.Router();

router.post('/', createEvent); 
router.get('/', getEvents);
// Update Event
router.put('/events/:eventId', updateEvent);

// Delete Event
router.delete('/events/:eventId', deleteEvent);

module.exports = router;