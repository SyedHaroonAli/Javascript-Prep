-- 
-- Problem #1
-- 
SELECT
 e.name AS employee_name,
 d.name AS department_name
from
 employees e
 JOIN departments d on e.department_id = d.id
 -- 
 -- Problem #2
 -- 
SELECT
 p.name AS project_name,
 d.name AS department_name
FROM
 projects p
 JOIN departments d on p.department = d.id
 -- 
 -- Problem #3
 -- 
SELECT
 e.name AS employee_name,
 p.name AS project_name
FROM
 employees e
 JOIN employee_projects ep ON e.id = ep.employee_id
 JOIN projects p ON p.id = ep.project_id
 -- 
 -- Problem #4
 --
 -- Inner Join Solution
SELECT
 d.name AS department_name,
 COUNT(e.id) as employee_count
FROM
 employees e
 JOIN departments AS d ON e.department_id = d.id
 -- Left Join Solution
SELECT
 d.name AS department_name,
 COUNT(e.id) as employee_count
FROM
 employees e
 LEFT JOIN departments AS d ON e.department_id = d.id
 -- 
 -- Problem #5
 --
SELECT
 e.name AS employee_name
FROM
 employees e
WHERE
 manager_id IS NULL
 -- 
 -- Problem #6
 --
SELECT
 e.name AS employee_name,
 m.name as manager_name
FROM
 employees e
 JOIN employee m ON e.manager_id = m.id
 -- 
 -- Problem #7
 --
SELECT
 e.name AS employee_name,
 p.name AS project_name
FROM
 employees e
 LEFT JOIN employee_projects ep ON e.id = ep.employee_id
 LEFT JOIN projects p ON p.id = ep.project_id
 -- 
 -- Problem #8
 --
SELECT
 p.name AS project_name
FROM
 projects p
 LEFT JOIN employee_projects ep ON p.id = ep.project_id
WHERE
 ep.project_id IS NULL
 -- 
 -- Problem #9
 --
SELECT
 m.name as manager_name
FROM
 employees e
 JOIN employees m ON e.manager_id = m.id
GROUP BY
 m.id,
 e.id
HAVING
 COUNT(e.id) > 1
 -- 
 -- Problem #10
 --
SELECT
 e.name AS employee_name,
 d.name AS department_name
from
 employees e
 JOIN departments d on e.department_id = d.id
ORDER BY
 department_name ASC,
 employee_name ASC