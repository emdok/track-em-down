const inquirer = require("inquirer");

// Prompt inquirer
const userPrompts = {
    promptHomeMenu(){
        return inquirer.prompt([{
            type: 'list',
            name: 'menuChoice',
            message: 'What would you like to do?',
            choices: ['View All Departments', 'View All Roles', 'View All Employees','Add Department', 'Add Role', 'Add Employee', 'Update Employee Role', 'Quit']
        }]);
    }
};


// methods to call database for appropriate response
const responseMethods = {

    ViewAllDepartments(){
        console.log('departments');
    },
    ViewAllRoles(){
        console.log('roles');
    },
    ViewAllEmployees(){
        console.log('employees');
    },
    AddDepartment(){
        console.log('addDepartment');
    },
    AddRole(){
        console.log('addRole');
    },
    AddEmployee(){
        console.log('AddEmployee');
    },
    UpdateEmployeeRole(){
        console.log('updateEmployeeRole');
    }
};

// App function to handle prompting a user and directing them to the correct response method

async function app(){
    const { menuChoice } = await userPrompts.promptHomeMenu();
    if (menuChoice === 'Quit') return;

    responseMethods[menuChoice.split(' ').join('')]();
    app();
};

app();