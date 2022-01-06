


const selectDepartment = (connection, prompts) => {
    connection.query(
        'SELECT * FROM department',
        (error, data) => {
            if (error) throw error

            console.log(data)
            prompts();
        });
}

module.exports = selectDepartment