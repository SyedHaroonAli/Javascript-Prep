-- SOLUTIONS FOR Problem Set 1
-- Problem#1
SELECT
 e.name AS employee_name,
 d.name AS department_name
from
 employees e
 JOIN departments d on e.department_id = d.id