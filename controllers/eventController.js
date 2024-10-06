const Event = require('../models/eventModel');
const { sendEventNotification } = require('../services/notificationService');

// Create event
const createEvent = async (req, res) => {
  try {
      const { title, description, date, location, maxAttendees, image } = req.body;

      const newEvent = new Event({
          title,
          description,
          date,
          location,
          maxAttendees,
          image,
      });

      const savedEvent = await newEvent.save(); 

      if (!savedEvent) {
          return res.status(400).json({ message: "Failed to create event." });
      }

      res.status(201).json(savedEvent); 
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error." });
  }
};


// Get all events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Event
const updateEvent = async (req, res) => {
    try {
        const { eventId } = req.params; // Get event ID from URL parameters
        const updatedEvent = await Event.findByIdAndUpdate(eventId, req.body, {
            new: true, // Return the updated document
            runValidators: true, // Validate the update against the schema
        });

        if (!updatedEvent) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.status(200).json({ 
          message: "Event updated successfully", 
          user: updatedEvent 
      });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Event
const deleteEvent = async (req, res) => {
    try {
        const { eventId } = req.params; // Get event ID from URL parameters
        const deletedEvent = await Event.findByIdAndDelete(eventId);

        if (!deletedEvent) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.status(204).json({ message: "Event deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
  getEvents,createEvent,deleteEvent,updateEvent
}