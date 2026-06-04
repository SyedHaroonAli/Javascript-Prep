# SQL Joins Theory

A **JOIN** combines rows from two or more tables based on a related column.

Thinking about joins as **set operations** is one of the best ways to understand them.

Suppose we have two sets:

### Employees (A)

```text id="30l7mh"
1 Alice
2 Bob
3 Charlie
4 David
```

### Departments (B)

```text id="l8x4k4"
1 Sales
2 IT
5 HR
```

Assume the join condition is:

```sql id="3y5s6k"
employees.department_id = departments.id
```

and only Alice belongs to Sales, Bob belongs to IT, Charlie belongs to an invalid department, and HR has no employees.

---

# INNER JOIN

**Intersection**

```text id="qmh1w9"
A ∩ B
```

Only rows that match in both tables.

```text id="vlj4du"
Employees              Departments

Alice  ─────────────► Sales
Bob    ─────────────► IT

Charlie               (no match)
                       HR (no match)
```

Result:

```text id="4fxb1z"
Alice | Sales
Bob   | IT
```

Think:

> Give me only the overlap.

---

# LEFT JOIN

**Everything from A + matching rows from B**

```text id="n6i98v"
A
```

Visualization:

```text id="y26e3r"
Employees              Departments

Alice  ─────────────► Sales
Bob    ─────────────► IT
Charlie               NULL
```

Result:

```text id="yv3ywo"
Alice   | Sales
Bob     | IT
Charlie | NULL
```

Think:

> Keep the entire left set. Fill missing matches with NULL.

---

# RIGHT JOIN

**Everything from B + matching rows from A**

```text id="2ah4u4"
B
```

Visualization:

```text id="5x6x3u"
Employees              Departments

Alice  ─────────────► Sales
Bob    ─────────────► IT
NULL                 HR
```

Result:

```text id="2o4r9m"
Alice | Sales
Bob   | IT
NULL  | HR
```

Think:

> Keep the entire right set.

---

# FULL OUTER JOIN

**Union of both sets**

```text id="k0wl2k"
A ∪ B
```

Visualization:

```text id="1z1vln"
Employees              Departments

Alice  ─────────────► Sales
Bob    ─────────────► IT

Charlie               NULL
NULL                  HR
```

Result:

```text id="k8u3df"
Alice   | Sales
Bob     | IT
Charlie | NULL
NULL    | HR
```

Think:

> Keep everything from both sides.

(MySQL doesn't support this directly.)

---

# LEFT JOIN + WHERE NULL

A very common pattern.

```sql id="b0r4ly"
SELECT d.*
FROM departments d
LEFT JOIN employees e
    ON d.id = e.department_id
WHERE e.id IS NULL;
```

Set interpretation:

```text id="pqdyb3"
B - (A ∩ B)
```

Result:

```text id="6mh3lb"
HR
```

Think:

> Give me departments that have no employees.

---

# INNER JOIN vs LEFT JOIN

### INNER JOIN

```text id="5s1k6i"
A ∩ B
```

Only overlap.

### LEFT JOIN

```text id="g2lq11"
A
```

Entire left side.

---

# SELF JOIN

A table joined with itself.

Employees:

```text id="x2r4yr"
John
 ├─ Alice
 └─ Bob
```

Think of it as:

```text id="0h8h8n"
Employees (as workers)
JOIN
Employees (as managers)
```

Two views of the same set.

```text id="u5ys8z"
Employees A
    ∩
Employees B
```

based on:

```sql id="gpph5u"
employee.manager_id = manager.id
```

---

# Many-to-Many Join as Sets

Employees:

```text id="7e6q3v"
Alice
Bob
```

Projects:

```text id="1x6w1w"
CRM
Website
```

Relationship Set:

```text id="rslhxr"
Alice → CRM
Alice → Website
Bob   → CRM
```

The junction table represents the relationship set.

```text id="frak06"
Employees
    ↕
EmployeeProjects
    ↕
Projects
```

---

## Quick Memory Trick

```text id="7n8d0k"
INNER JOIN = A ∩ B

LEFT JOIN  = A

RIGHT JOIN = B

FULL JOIN  = A ∪ B

LEFT JOIN ... WHERE B IS NULL
            = A - B

RIGHT JOIN ... WHERE A IS NULL
            = B - A
```
