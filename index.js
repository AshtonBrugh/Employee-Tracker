const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const selectDepartment = require('./crud/read');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'AshtonBrugh',
    password: 'password',
    database: 'employee_tracker'

});

//prompt user for action
const prompts = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'Add a department', 'Add an employee', 'Update an employee role']
        }
    ]).then(answers => {
        console.log(answers); //USE SWITCH STATEMENTS HERE 
        switch (answers.action) {
            case 'View all departments':
                //calling your function to get all departments
                selectDepartment(connection, prompts);
                
                break;
        
            default:
                break;
        }
    })
}

prompts();







