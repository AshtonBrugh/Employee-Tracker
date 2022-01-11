USE employee_tracker;
INSERT INTO department(name)
VALUES 
    ('Sales'),('Engineering'),('Finance'),('Legal');

INSERT INTO role(title, salary, department_id)
VALUES 
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 1500000, 2 ),
    ('Account Manager', 130000, 3);

INSERT INTO employee(first_name, last_name, job_title, department, salary, manager, role_id)
VALUES  
    ('Mike', 'Chan', 'Salesperson', 'Sales', 80000, 'Ashton Brugh', 1),
    ('Ashley', 'Rodriguez', 'Lead Engineer', 'Engineering', 150000, null, 2),
    ('Kevin', 'Tupik', 'Account Manager', 'Finance', 200000, 'Ashton Brugh', 3);