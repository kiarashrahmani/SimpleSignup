const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // your MySQL username
    password: '', // your MySQL password
    database: 'signuppagedb', // your MySQL database name
});

// Connect to the MySQL server
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Perform database operations or handle the connection as needed

// Close the MySQL connection when done
// connection.end();

// Export the connection for use in other modules
module.exports = connection;
