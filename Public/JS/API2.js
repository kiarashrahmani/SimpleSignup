const express = require('express');
const connection = require('./connection');
const router = express.Router();

const getInformation = (req, res) => {
    var userId = req.params.userId;
    var query = 'SELECT * FROM user WHERE id = ?';
    
    connection.query(query, [userId], function(err, results) {
        if (err) {
            console.error('Error querying MySQL database: ' + err.stack);
            return res.status(500).send('Error querying database');
        }
        
        if (results.length === 0) {
            return res.status(404).send('User not found');
        }
        
        var userInfo = 'Firstname: ' + results[0].Firstname + ', Lastname: ' + results[0].Lastname +
                        ', Email: ' + results[0].Email + ', Marital: ' + results[0].Marital;
                        
        res.send(userInfo);
    });
};

router.get('/:userId', getInformation);

module.exports = router;
