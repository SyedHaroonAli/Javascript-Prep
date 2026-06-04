# Problem Set 2 — Intermediate SQL Joins

These problems focus on:

- `LEFT JOIN`
- `SELF JOIN`
- `GROUP BY`
- `HAVING`
- Multi-table joins
- Real-world reporting queries

---

## Problem 11: Managers and Report Count

Show every manager and the number of direct reports.

### Output

```text
manager_name | report_count
```

Example:

```text
John   | 2
David  | 2
Sophia | 1
```

---

## Problem 12: Departments With No Employees

Find departments that have no employees.

### Output

```text
department_name
```

Expected:

```text
Legal
```

---

## Problem 13: Employees Working on Multiple Projects

Find employees assigned to more than one project.

### Output

```text
employee_name | project_count
```

Expected:

```text
Emma | 2
```

---

## Problem 14: Project Assignment Count

Show every project and the number of employees assigned to it.

Include projects with zero assignments.

### Output

```text
project_name | employee_count
```

Example:

```text
CRM            | 2
AI Initiative  | 0
```

---

## Problem 15: Department Project Count

Show how many projects belong to each department.

### Output

```text
department_name | project_count
```

---

## Problem 16: Employees Not Assigned To Any Project

Find employees who are not assigned to a project.

### Output

```text
employee_name
```

Expected includes:

```text
John
David
Chris
Sophia
Jessica
```

---

## Problem 17: Managers Whose Team Size Is Greater Than 1

### Output

```text
manager_name | report_count
```

Filter:

```sql
report_count > 1
```

---

## Problem 18: Departments With More Than 2 Employees

### Output

```text
department_name | employee_count
```

Use:

```sql
HAVING
```

---

## Problem 19: Employee, Manager, Department

Show:

```text
employee_name
manager_name
department_name
```

Example:

```text
Alice | John  | Sales
Emma  | David | IT
```

---

## Problem 20: Employee, Project, Department

Show:

```text
employee_name
project_name
department_name
```

Example:

```text
Emma  | CRM           | IT
Alice | Lead Campaign | Sales
```

---

## Problem 21: Department With Most Employees

Return only the department with the highest employee count.

### Output

```text
department_name
employee_count
```

---

## Problem 22: Department With Most Projects

### Output

```text
department_name
project_count
```

---

## Problem 23: Employees Working Outside Their Department

Find employees assigned to projects owned by a different department.

### Output

```text
employee_name
employee_department
project_department
project_name
```

**Hint:** Update one record first:

```sql
INSERT INTO employee_projects VALUES (2,1);
```

Alice (Sales) is now working on CRM (IT).

---

## Problem 24: Projects With Employees From Multiple Departments

### Output

```text
project_name
department_count
```

Example:

```text
CRM | 2
```

---

## Problem 25: Chain of Command

Show:

```text
employee
manager
manager_manager
```

Example:

```text
Alice | John | NULL
```

Requires multiple self joins.

---

## Problem 26: Top 3 Managers By Team Size

### Output

```text
manager_name
report_count
```

Sorted descending.

---

## Problem 27: Departments Where Every Employee Has A Project

Find departments in which all employees are assigned to at least one project.

### Output

```text
department_name
```

---

## Problem 28: Departments Where No Employee Has A Project

### Output

```text
department_name
```

---

## Problem 29: Employee Utilization Report

Show:

```text
employee_name
department_name
project_count
```

Sort by:

```sql
project_count DESC
```

---

## Problem 30: Organization Summary

Produce a single result containing:

```text
department_name
employee_count
manager_count
project_count
assigned_employee_count
```

Example:

```text
IT | 3 | 1 | 3 | 2
```

This is the kind of reporting query commonly found in CRMs and analytics dashboards.

---
