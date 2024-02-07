const express = require('express');
const path = require('path');
const connection = require(path.join(__dirname, 'connection.js'));
const router = express.Router();

// API endpoint to handle AJAX requests
router.post('/', (req, res) => {
    // Get data from the AJAX request
    const formData = req.body;

    // Insert data into the 'user' table
    const query = 'INSERT INTO user (Firstname, Lastname, Email, Marital) VALUES (?, ?, ?, ?)';
    const values = [formData.Firstname, formData.Lastname, formData.Email, formData.Marital];

    connection.query(query, values, (error, results) => {
        if (error) {
            console.error('Error executing MySQL query:', error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        // Successful insertion
        res.json({ success: true, insertedId: results.insertId });
    });
});

module.exports = router;
