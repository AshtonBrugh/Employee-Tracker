//this is where we add a department & an employee

const addDepartment = (connection, prompts, department) => {
    connection.query(
       
        "INSERT INTO department (name) VALUES (?)", [department.addDepartment],
        (error) => {
            if (error) throw error

            prompts();
        }
    )

};

//createa addRole function
const addRole = (connection, prompt, roleAnswers) => {

    //then you can use roleAnswers.xxxxx to build your next INSERT connection to DB
};

const addEmployee = (connection, prompts, employee) => {
    connection.query(

        "INSERT INTO employee (first_name, last_name, job_title, department, salary, manager, role_id) VALUES (?,?,?,?,?,?,?)", [employee.firstName, employee.lastName, employee.jobTitle, employee.department, employee.salary, employee.manager, employee.roleID],
        (error) => {
            if (error) throw error

            prompts();
        }
    )
}

module.exports = {addDepartment, addRole, addEmployee};