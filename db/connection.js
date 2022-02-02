const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        // My credentials
        user: "root",
        password: "*********",
        database: "employees",
    },
    console.log("Connected to the employees database.")
);

module.exports = db;
