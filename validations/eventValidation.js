const { check } = require('express-validator');

exports.eventValidation = [
  check('title', 'Event title is required').not().isEmpty(),
  check('description', 'Event description is required').not().isEmpty(),
  check('date', 'A valid date is required').isISO8601(),
  check('location', 'Event location is required').not().isEmpty(),
  check('maxAttendees', 'Max attendees should be a number').isInt({ min: 1 }),
];
