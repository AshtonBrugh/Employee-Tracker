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
const addRole = (connection, prompts, roleAnswers) => {

    connection.query(
        "SELECT id FROM department WHERE name =  '" + roleAnswers.deptChoice + "'", (err, res) => {
            if (err) throw err
            const deptID = res;
        
        
        "INSERT INTO role (title, salary, department_id) VALUES (?,?,?)", [roleAnswers.deptName, roleAnswers.deptSalary, deptID],
        (error) => {
            if (error) throw error
        }
        prompts();
        }
    )

};

const addEmployee = (connection, prompts, employee) => {
    connection.query(

        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)", [employee.firstName, employee.lastName, employee.role, employee.manager],
        (error) => {
            if (error) throw error

            prompts();
        }
    )
}

module.exports = {addDepartment, addRole, addEmployee};