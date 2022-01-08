const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const { viewRoles, selectDepartment, viewEmployees } = require('./crud/read');
const addDepartment = require('./crud/create');


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
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ]).then(answers => {
        console.log(answers); //USE SWITCH STATEMENTS HERE 
        switch (answers.action) {
            case 'View all departments':
                //calling your function to get all departments
                selectDepartment(connection, prompts);
                
                break;

            case 'View all employees':
                    //calling your function to view all employees
                    viewEmployees(connection, prompts);
    
                 break;

            case 'View all roles':
                //calling your function to get a roles
                viewRoles(connection, prompts);

                break;
            
            case 'Add a department':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'addDepartment',
                        message: 'Name of new department?'

                    }
                ]).then(answer => {
                    addDepartment(connection, prompts, answer);
                });
                break;
            
            case 'Add a role':
                connection.query(
                    'SELECT * FROM department',
                    (error, data) => {
                        if (error) throw error
                        
                        console.log(data)
                        //use 'data' and create an array called 'dpts' that have all departments
                        inquirer.prompt([
                            {
                                type: 'input',
                                name: 'employeeName',
                                message: 'What is the employee name?'
                            },
                            {
                                type: 'input',
                                name: 'employeeSalary',
                                message: 'What is the employee salary?'
                                
                            },
                            {
                                type: 'list',
                                name: 'employeeDept',
                                message: 'What is the employee department?',
                                choices: /* Somehow you need to transform data into an array of dpts */dpts
                            }
        
                        ]).then(answers => {
                            
                            // addRole(connection, prompts, answers)
                        })
                    });

            
           

        
            default:
                break;
        }
    })
};



prompts();









