const mysql = require('mysql2');

require('dotenv').config();

// Connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        // My credentials
        user: process.env.DB_USER,
        password: process.env.DB_PW,
        database: "employee_tracker",
    },
    console.log("Connected to the employee_tracker database.")
);

module.exports = db;