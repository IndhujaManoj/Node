// userRoutes.js
const express = require('express');
const { body, validationResult } = require('express-validator');
const userController = require('../controllers/postuserController'); // Adjust the controller import
const { transformUserData } = require('../utils/userUtils');
const router = express.Router();

// Validate request body
const validateUser = [
  body('mobile').isString(),
  body('password').isString(),
  body('role_code').isString(),
  body('shop_id').isString(),
  body('status').isString(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Create a new user
router.post('/api/app_users', validateUser, async (req, res) => {
  try {
    const data = transformUserData(req.body);
    const result = await userController.createUser(data);

    // Log the URL
    console.log(`Received POST request at ${req.originalUrl}`);

    res.status(201).json(result);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
