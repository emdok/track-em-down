const db = require("../db/connection");
const cTable = require("console.table");

function getRoles() {
  const sql = `SELECT * FROM role`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
    }
    console.log("");
    console.table(rows);
  });
}

function getDepartments() {
  const sql = `SELECT * FROM department`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
    }
    console.log("");
    console.table(rows);
  });
}

function getEmployees() {
  const sql = `SELECT employee.id AS ID, employee.first_name AS First_Name, employee.last_name AS Last_Name, role.title AS Title, role.salary As Salary, department.name AS Department, CONCAT(manager.first_name, ' ', manager.last_name) AS Manager 
  FROM employee
  JOIN role ON role.id = employee.role_id
  JOIN department ON department.id = role.department_id
  LEFT JOIN employee manager ON employee.manager_id = manager.id`;
  
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
    }
    console.log("");
    console.table(rows);
  });
};

function addDepartment(answers) {
    const sql = `INSERT INTO department (name) VALUE('${answers.departmentName}')`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.log("");
        console.table(rows);
    });
};

module.exports = { getRoles, getDepartments, getEmployees, addDepartment };
