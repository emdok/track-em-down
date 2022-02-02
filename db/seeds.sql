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
    ('Sota', 'Proffit', 1, NULL),
    ('Emily', 'Dokken', 2, 1),
    ('Chris', 'Piuggi', 3, 1),
    ('Jasmine', 'Scott', 4, NULL),
    ('Chris', 'Angalet', 5, 4),
    ('Ami', 'Pascole', 6, 4),
    ('Lizelle', 'Gallez', 7, NULL),
    ('Vinh', 'Nguyen', 8, 7),
    ('Laryea', 'Smith', 9, NULL),
    ('Jeremie', 'Harris', 10, 9),
    ('Kenny', 'Wilson', 11, NULL),
    ('Bob', 'Stock', 12, 11),
    ('Dave', 'Miller', 13, 11),
    ('Jacob', 'Whitney', 6, 11),
    ('Haley', 'Wallace', 6, 11),
    ('Lauren', 'Fleury', 8, 11);