const express = require('express');
const router = express.Router();
const path = require('path');

// Import API controllers
const saveFormAPI = require('./Public/JS/API');
const getUserInfoAPI = require('./Public/JS/API2');

// Route for saving form data
router.use('/save', saveFormAPI);

// Route for getting user information
router.use('/user', getUserInfoAPI);

module.exports = router;
