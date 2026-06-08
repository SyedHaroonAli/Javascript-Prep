-- 
-- Problem #11
--
SELECT
 m.name AS manager_name,
 COUNT(e.id) AS report_count
FROM
 employees e
 JOIN employees m ON m.id = e.manager_id
GROUP BY
 m.id,
 m.name
 -- 
 -- Problem #12
 --
SELECT
 d.name AS department_name
FROM
 departments d
 LEFT JOIN employees e ON e.department = d.id
GROUP BY
 d.id,
 d.name
HAVING
 COUNT(e.id) < 1