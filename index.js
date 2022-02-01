const inquirer = require("inquirer");
const db = require("./db/connection");
const {
  getRoles,
  getDepartments,
  getEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployees
} = require("./utils/roleUtility");

// Prompt inquirer
const userPrompts = {
  promptHomeMenu() {
    return inquirer.prompt([
      {
        type: "list",
        name: "menuChoice",
        message: "What would you like to do?",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update Employee Role",
          "Quit",
        ],
      },
    ]);
  },
};

// methods to call database for appropriate response
const responseMethods = {
  ViewAllDepartments() {
    getDepartments(app);
  },
  ViewAllRoles() {
    getRoles(app);
  },
  ViewAllEmployees() {
    getEmployees(app);
  },
  async AddDepartment() {
    await inquirer
      .prompt([
        {
          type: "input",
          name: "departmentName",
          message: "Department name?",
        },
      ])
      .then((answers) => addDepartment(answers, app));
  },
  async AddRole() {
    await inquirer
      .prompt([
        {
          type: "input",
          name: "title",
          message: "New Role title?",
        },
        {
          type: "input",
          name: "salary",
          message: "What is the salary?",
        },
        {
          type: "input", // MAKE THIS A LIST AND ADD A QUERY
          name: "department",
          message: "Please enter the department.",
        },
      ])
      .then((answers) => addRole(answers, app));
  },
  async AddEmployee() {
    await inquirer
      .prompt([
        {
          type: "input",
          name: "firstName",
          message: "First name?",
        },
        {
          type: "input",
          name: "lastName",
          message: "Last name?",
        },
        {
          type: "input", // MAKE THIS A LIST AND CREATE A QUERY
          name: "role", 
          message: "What is their role id?",
        },
        {
          type: "input", // MAKE THIS A LIST AND CREATE A QUERY
          name: "manager",
          message: "Who is their manager?",
        },
      ])
      .then((answers) => addEmployee(answers, app));
  },
  UpdateEmployeeRole() {
    db.query(
      `SELECT CONCAT(first_name,' ', last_name) AS name, id AS value FROM employee`,
      (err, employees) => {
        db.query(
          `SELECT title AS name, id AS value FROM role`,
          (err, roles) => {
            inquirer
              .prompt([
                {
                  type: "list",
                  name: "employee",
                  choices: employees,
                },
                {
                    type: "list",
                    name: "role",
                    choices: roles
                }
              ])
              .then((answers) => {
                  updateEmployees(answers, app);
              });
          }
        );
      }
    );
  },
};

// App function to handle prompting a user and directing them to the correct response method

async function app() {
  const { menuChoice } = await userPrompts.promptHomeMenu();
  if (menuChoice === "Quit") return;

  responseMethods[menuChoice.split(" ").join("")]();
}

app();
