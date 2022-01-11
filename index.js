const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const { viewRoles, selectDepartment, viewEmployees } = require('./crud/read');
const { addDepartment, addEmployee, addRole } = require('./crud/create');



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'AshtonBrugh',
    password: 'password',
    database: 'employee_tracker',
    multipleStatements: true

});



//prompt user for action
const prompts = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employee role']
        }
    ]).then(answers => {

         //USE SWITCH STATEMENTS HERE 
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
                        //use 'data' and create an array called 'dpts' that have all departments
                        var depts = Object.values(data);
                        console.log(depts);
                        inquirer.prompt([
                            {
                                type: 'input',
                                name: 'deptName',
                                message: 'What is the role?'
                            },
                            {
                                type: 'input',
                                name: 'deptSalary',
                                message: 'What is the salary?'
                                
                            },
                            {
                                type: 'list',
                                name: 'deptChoice',
                                message: 'What is the department?',
                                choices: depts
                            }
                        
                        ])
                            .then(answers => {
                            addRole(connection, prompts, answers)
                        })
                    });
                    break;


            case 'Add an employee':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'firstName',
                        message: "Employee's first name?"
                    },
                    {
                        type: 'input',
                        name: 'lastName',
                        message: "Employee's last name?"
                    },
                    {
                        type: 'input',
                        name: 'role',
                        message: "Employee's role?"
                    },
                    
                    {
                        type: 'list',
                        name: 'manager',
                        message: "Employee's manager?",
                        choices: ['1', '2', '3']
                    }
                     ]).then(answers => {
                         addEmployee(connection, prompts, answers);
                     });
                     break;
            default:
                break;
        }
    })
};



prompts();











