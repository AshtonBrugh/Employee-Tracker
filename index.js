const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'AshtonBrugh',
    password: 'password',
    database: 'employee_tracker'

});


connection.query('SELECT * FROM department', (error, data) => {
    console.table(data)
});



