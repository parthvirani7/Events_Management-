const express = require('express');
const { registerUser, loginUser ,deleteUser,updateUser } = require('../controllers/userController');
const { registerValidation, loginValidation  } = require('../validations/userValidation');
const { validationResult } = require('express-validator');
const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

// Update User
router.put('/users/:userId', updateUser);

// Delete User
router.delete('/users/:userId', deleteUser);

module.exports = router;
