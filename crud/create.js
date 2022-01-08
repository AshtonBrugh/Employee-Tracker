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
}

module.exports = {addDepartment, addRole};