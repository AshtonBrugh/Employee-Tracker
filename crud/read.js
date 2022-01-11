const cTable = require('console.table');

//allows user to view all departments
const selectDepartment = (connection, prompts) => {
    connection.query(
        'SELECT * FROM department',
        (error, data) => {
            if (error) throw error
            
            console.table(data)
            prompts();
        });
};

//allows user to view all roles
const viewRoles = (connection, prompts) => {
    connection.query(
        'SELECT * FROM role',
        (error, data) => {
            if (error) throw error

            console.table(data)
            prompts();

        }
    )
};

//allows user to view all employees
const viewEmployees = (connection, prompts) => {
    connection.query(
        'SELECT * FROM employee',
        (error, data) => {
            if (error) throw error

            console.table(data)
            prompts();
        }
    )
};


module.exports ={ selectDepartment, viewRoles, viewEmployees};
