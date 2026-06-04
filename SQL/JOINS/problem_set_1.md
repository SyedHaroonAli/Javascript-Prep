## Problem Set 1 — Easy SQL Joins

Use the seeded tables:

- `employees`
- `departments`
- `projects`
- `employee_projects`

Try solving these without looking up answers.

---

### Problem 1: Employee Departments

Show every employee along with their department name.

**Output**

```text
employee_name | department_name
```

Example:

```text
Alice | Sales
Emma  | IT
```

---

### Problem 2: Project Departments

Show every project and the department that owns it.

**Output**

```text
project_name | department_name
```

Example:

```text
CRM | IT
```

---

### Problem 3: Employees Assigned to Projects

Show employees who are assigned to projects.

**Output**

```text
employee_name | project_name
```

Example:

```text
Emma | CRM
Bob  | Lead Campaign
```

---

### Problem 4: Employee Count per Department

Show the number of employees in each department.

**Output**

```text
department_name | employee_count
```

Example:

```text
Sales | 3
IT    | 3
```

---

### Problem 5: Employees Without Managers

Find employees who do not report to anyone.

**Output**

```text
employee_name
```

Example:

```text
John
David
```

---

### Problem 6: Employee → Manager

Show each employee and their manager.

**Output**

```text
employee_name | manager_name
```

Example:

```text
Alice | John
Emma  | David
```

---

### Problem 7: All Employees and Their Projects

Show all employees, even if they are not assigned to a project.

**Output**

```text
employee_name | project_name
```

Example:

```text
John  | NULL
Emma  | CRM
```

---

### Problem 8: Projects Without Employees

Find projects that have nobody assigned to them.

**Output**

```text
project_name
```

Expected result should include:

```text
AI Initiative
```

---

### Problem 9: Department Managers

Find employees who manage at least one other employee.

**Output**

```text
manager_name
```

Example:

```text
John
David
Sophia
```

---

### Problem 10: Employee + Department

Show employee name and department name sorted by department.

**Output**

```text
employee_name | department_name
```

Sort by:

```sql
department_name ASC
employee_name ASC
```

---
