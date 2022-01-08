


const selectDepartment = (connection, prompts) => {
    connection.query(
        'SELECT * FROM department',
        (error, data) => {
            if (error) throw error
            
            console.log(data)
            prompts();
        });
};


const viewRoles = (connection, prompts) => {
    connection.query(
        'SELECT * FROM role',
        (error, data) => {
            if (error) throw error

            console.log(data)
            console.log('this is view roles')
            prompts();

        }
    )
};


const viewEmployees = (connection, prompts) => {
    connection.query(
        'SELECT * FROM employee',
        (error, data) => {
            if (error) throw error

            console.log(data)
            prompts();
        }
    )
};


module.exports ={ selectDepartment, viewRoles, viewEmployees};
