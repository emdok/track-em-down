const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        // My credentials
        user: "root",
        password: "Cascade88#bachelor",
        database: "employee_tracker",
    },
    console.log("Connected to the employee_tracker database.")
);

module.exports = db;