DROP TABLE IF EXISTS employee_projects;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS departments;

CREATE TABLE departments (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    manager_id INT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE projects (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE employee_projects (
    employee_id INT NOT NULL,
    project_id INT NOT NULL,
    PRIMARY KEY (employee_id, project_id),
    FOREIGN KEY (employee_id) REFERENCES employees(id),
    FOREIGN KEY (project_id) REFERENCES projects(id)
);

INSERT INTO departments (id, name) VALUES
(1, 'Sales'),
(2, 'IT'),
(3, 'HR'),
(4, 'Finance'),
(5, 'Legal');

INSERT INTO employees (id, name, manager_id, department_id) VALUES
(1, 'John', NULL, 1),
(2, 'Alice', 1, 1),
(3, 'Bob', 1, 1),

(4, 'David', NULL, 2),
(5, 'Emma', 4, 2),
(6, 'Chris', 4, 2),

(7, 'Sophia', NULL, 3),
(8, 'Ryan', 7, 3),

(9, 'Mike', NULL, 4),

(10, 'Jessica', NULL, 5);

INSERT INTO projects (id, name, department_id) VALUES
(1, 'CRM', 2),
(2, 'Website', 2),
(3, 'Lead Campaign', 1),
(4, 'Recruitment', 3),
(5, 'Payroll', 4),
(6, 'AI Initiative', 2);

INSERT INTO employee_projects (employee_id, project_id) VALUES
(2, 3),
(3, 3),

(5, 1),
(5, 2),

(6, 1),

(8, 4),

(9, 5);

