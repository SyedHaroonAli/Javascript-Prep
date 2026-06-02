# Introduction to SQL

## What is SQL?

**SQL (Structured Query Language)** is the standard language used to interact with relational databases.

Using SQL, you can:

- Store data
- Retrieve data
- Update data
- Delete data
- Create database structures
- Manage permissions

Examples of databases that use SQL:

- MySQL
- PostgreSQL
- Microsoft SQL Server
- Oracle Database

---

# Why Do We Need Databases?

Imagine storing CRM leads in Excel:

| Lead ID | Name  | Phone      |
| ------- | ----- | ---------- |
| 1       | John  | 9999999999 |
| 2       | Alice | 8888888888 |

As data grows:

- Searching becomes slow
- Data duplication occurs
- Multiple users cannot safely edit simultaneously
- Relationships become difficult

Databases solve these problems.

---

# Database Terminology

## Database

A collection of related data.

Example:

```txt
lemaicrm
```

---

## Table

A collection of related records.

Example:

```txt
leads
```

| id  | name  | phone      |
| --- | ----- | ---------- |
| 1   | John  | 9999999999 |
| 2   | Alice | 8888888888 |

---

## Row (Record)

A single entry in a table.

```txt
1 | John | 9999999999
```

---

## Column (Field)

A property of a record.

```txt
id
name
phone
```

---

# SQL Categories

## DDL (Data Definition Language)

Used to define database structures.

Commands:

```sql
CREATE
ALTER
DROP
TRUNCATE
```

---

## DML (Data Manipulation Language)

Used to manipulate data.

Commands:

```sql
INSERT
UPDATE
DELETE
```

---

## DQL (Data Query Language)

Used to retrieve data.

Command:

```sql
SELECT
```

---

## DCL (Data Control Language)

Used for permissions.

Commands:

```sql
GRANT
REVOKE
```

---

# Creating a Database

```sql
CREATE DATABASE crm;
```

Using the database:

```sql
USE crm;
```

---

# Creating a Table

```sql
CREATE TABLE leads (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    phone VARCHAR(20),
    email VARCHAR(255)
);
```

---

# Viewing Tables

```sql
SHOW TABLES;
```

---

# Viewing Table Structure

```sql
DESCRIBE leads;
```

Output:

| Field | Type         |
| ----- | ------------ |
| id    | int          |
| name  | varchar(100) |
| phone | varchar(20)  |
| email | varchar(255) |

---

# Inserting Data

```sql
INSERT INTO leads (
    name,
    phone,
    email
)
VALUES (
    'John',
    '9999999999',
    'john@example.com'
);
```

Multiple records:

```sql
INSERT INTO leads (name, phone)
VALUES
('John', '9999999999'),
('Alice', '8888888888'),
('Bob', '7777777777');
```

---

# Retrieving Data

## Select All Records

```sql
SELECT * FROM leads;
```

Output:

| id  | name  | phone      |
| --- | ----- | ---------- |
| 1   | John  | 9999999999 |
| 2   | Alice | 8888888888 |

---

## Select Specific Columns

```sql
SELECT
    id,
    name
FROM leads;
```

---

# Filtering Data

## WHERE Clause

```sql
SELECT *
FROM leads
WHERE id = 1;
```

---

## Comparison Operators

| Operator | Meaning               |
| -------- | --------------------- |
| =        | Equal                 |
| !=       | Not Equal             |
| >        | Greater Than          |
| <        | Less Than             |
| >=       | Greater Than or Equal |
| <=       | Less Than or Equal    |

Example:

```sql
SELECT *
FROM leads
WHERE id > 10;
```

---

# Logical Operators

## AND

```sql
SELECT *
FROM leads
WHERE city = 'Hyderabad'
AND status = 'Qualified';
```

---

## OR

```sql
SELECT *
FROM leads
WHERE source = 'Website'
OR source = 'Facebook';
```

---

## IN

```sql
SELECT *
FROM leads
WHERE source IN (
    'Website',
    'Facebook',
    'Google'
);
```

---

# Sorting Data

## ORDER BY

Ascending:

```sql
SELECT *
FROM leads
ORDER BY name ASC;
```

Descending:

```sql
SELECT *
FROM leads
ORDER BY created_at DESC;
```

---

# Limiting Results

```sql
SELECT *
FROM leads
LIMIT 10;
```

Pagination:

```sql
SELECT *
FROM leads
LIMIT 10 OFFSET 20;
```

---

# Updating Data

```sql
UPDATE leads
SET status = 'Qualified'
WHERE id = 1;
```

---

# Deleting Data

```sql
DELETE FROM leads
WHERE id = 1;
```

---

# Primary Key

A column that uniquely identifies each row.

```sql
CREATE TABLE leads (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100)
);
```

Example:

```txt
1
2
3
```

No duplicates allowed.

---

# Foreign Key

Creates relationships between tables.

### Users Table

```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100)
);
```

### Leads Table

```sql
CREATE TABLE leads (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    FOREIGN KEY (user_id)
        REFERENCES users(id)
);
```

Relationship:

```txt
users
  |
  | 1 : many
  |
leads
```

---

# Common Data Types

| Type          | Example             |
| ------------- | ------------------- |
| INT           | 10                  |
| BIGINT        | 100000000           |
| VARCHAR(255)  | Text                |
| TEXT          | Large Text          |
| BOOLEAN       | true/false          |
| DATE          | 2026-06-03          |
| DATETIME      | 2026-06-03 10:30:00 |
| DECIMAL(10,2) | 999.99              |

---

# Aggregate Functions

## COUNT

```sql
SELECT COUNT(*)
FROM leads;
```

---

## SUM

```sql
SELECT SUM(amount)
FROM deals;
```

---

## AVG

```sql
SELECT AVG(amount)
FROM deals;
```

---

## MAX

```sql
SELECT MAX(amount)
FROM deals;
```

---

## MIN

```sql
SELECT MIN(amount)
FROM deals;
```

---

# Grouping Data

```sql
SELECT
    source,
    COUNT(*) AS total
FROM leads
GROUP BY source;
```

Output:

| source   | total |
| -------- | ----- |
| Website  | 100   |
| Facebook | 50    |
| Google   | 75    |

---

# SQL Execution Order

Even though you write:

```sql
SELECT *
FROM leads
WHERE status = 'Qualified'
ORDER BY created_at DESC
LIMIT 10;
```

SQL processes roughly as:

```txt
FROM
WHERE
SELECT
ORDER BY
LIMIT
```

Understanding this is important for writing efficient queries.

---

# SQL in CRM Applications

In a CRM like yours, SQL is commonly used for:

```sql
-- Find leads assigned to a user
SELECT *
FROM leads
WHERE owner_id = 10;
```

```sql
-- Count calls per lead
SELECT
    lead_id,
    COUNT(*)
FROM lead_calls
GROUP BY lead_id;
```

```sql
-- Latest activity
SELECT *
FROM lead_activities
ORDER BY created_at DESC
LIMIT 50;
```
