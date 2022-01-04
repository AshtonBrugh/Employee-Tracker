USE employee_tracker;
INSERT INTO department(name)
VALUES 
    ('Sales'),('Engineering'),('Finance'),('Legal');

INSERT INTO role(title, salary, department_id)
VALUES 
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 1500000, 2 ),
    ('Account Manager', 130000, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES  
    ('Mike', 'Chan', 1, null),
    ('Ashley', 'Rodriguez', 2, 1),
    ('Kevin', 'Tupik', 3, 1);