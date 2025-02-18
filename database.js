const mysql = require('mysql2');

var con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "nakya",
    waitForConnections: true,
    connectionLimit: 1000,
    queueLimit: 0
});

// Test the connection
con.query('SELECT 1', (err, results) => {
    if (err) {
      console.error('Error connecting to the database:');
    } else {
      console.log('Database connected successfully:');
    }
});

// exports promise base conection
module.exports = con.promise();

