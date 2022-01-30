INSERT INTO department (name)
VALUES
    ('People'),
    ('Technology'),
    ('Design'),
    ('Strategy'),
    ('Writing'),
    ('Production');

INSERT INTO role (title, salary, department_id)
VALUES
    ('HR Director', 200000.00, 1),
    ('HR Manager', 150000.00, 1),
    ('HR Associate', 100000.00, 1),
    ('Tech Director', 200000.00, 2),
    ('Tech Lead', 150000.00, 2),
    ('Developer', 125000.00, 2),
    ('Strategy Director', 200000.00, 3),
    ('Stategist', 150000.00, 3),
    ('Writing Director', 200000.00, 4),
    ('Copy Writer', 150000.00, 4),
    ('Executive Producer', 200000.00, 5),
    ('Senior Producer', 150000.00, 5),
    ('Producer', 125000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  
    ('Sota', 'Proffit', 3, NULL);