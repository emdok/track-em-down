const db = require("../db/connection");
const cTable = require("console.table");

function getRoles(app) {
  const sql = `SELECT * FROM role`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
    }
    console.log("");
    console.table(rows);
    app();
  });
}

function getDepartments(app) {
  const sql = `SELECT * FROM department`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
    }
    console.log("");
    console.table(rows);
    app();
  });
}

function getEmployees(app) {
  const sql = `SELECT employee.id AS ID, employee.first_name AS First_Name, employee.last_name AS Last_Name, role.title AS Title, role.salary As Salary, department.name AS Department, CONCAT(manager.first_name, ' ', manager.last_name) AS Manager 
  FROM employee
  LEFT JOIN role ON employee.role_id = role.id
  LEFT JOIN department ON role.department_id = department.id
  LEFT JOIN employee manager ON manager.id = employee.manager_id
  ORDER BY ID`;
  
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
    }
    console.log("");
    console.table(rows);
    app();
  });
};

function addDepartment(answers, app) {
    const sql = `INSERT INTO department (name) VALUE('${answers.departmentName}')`;

    db.query(sql, (err) => {
        if (err) {
            console.log(err);
        }
        getDepartments(app);
    });
};

function addRole(answers, app) {
    const sql = `INSERT INTO role (title, salary, department_id) VALUE('${answers.title}','${answers.salary}','${answers.department}')`;

    db.query(sql, (err) => {
        if (err) {
            console.log(err);
        }
        getRoles(app);
    });

}

function addEmployee(answers, app) {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE('${answers.firstName}','${answers.lastName}','${answers.role}','${answers.manager}')`;

    db.query(sql, (err) => {
        if (err) {
            console.log(err);
        }
        getEmployees(app);
    });
}

function updateEmployees(answers, app) {
    const sql = `UPDATE employee SET role_id = ${answers.role} WHERE id = ${answers.employee}`;

    db.query(sql, (err) => {
        if (err) {
            console.log(err);
        }
        getEmployees(app);
    });
}

module.exports = { getRoles, getDepartments, getEmployees, addDepartment, addRole, addEmployee, updateEmployees };
