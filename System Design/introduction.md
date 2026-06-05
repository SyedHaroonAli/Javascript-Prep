# System Design Introduction

System Design is the process of defining the **architecture, components, modules, interfaces, and data flow** of a software system to meet functional and non-functional requirements.

In simple terms:

> System Design answers the question: **"How do we build a system that works reliably at scale?"**

---

## Why Learn System Design?

As applications grow, problems arise:

- Millions of users
- Large amounts of data
- High traffic
- Reliability requirements
- Security concerns

System Design helps us build systems that are:

- Scalable
- Reliable
- Maintainable
- Secure
- Cost-effective

---

# Example

Imagine you're building a CRM application.

Initially:

```
Users
  |
Web App
  |
MySQL
```

Works fine for 100 users.

What happens when you have:

- 100,000 users?
- 1 million leads?
- Thousands of requests per second?

You need better architecture.

```
Users
   |
Load Balancer
   |
+----------+----------+
|           |          |
App 1     App 2     App 3
|
Cache (Redis)
|
Database
```

This is where System Design begins.

---

# Functional Requirements

These define **what the system should do**.

Examples for CRM:

- Create leads
- Update leads
- Assign leads
- Generate reports
- Manage users

Questions:

- What features exist?
- What actions can users perform?

---

# Non-Functional Requirements

These define **how well the system should perform**.

Examples:

- Response time < 200ms
- 99.9% uptime
- Handle 10,000 users
- Secure data storage

Important NFRs:

- Scalability
- Availability
- Reliability
- Performance
- Security
- Maintainability

---

# Building Blocks of System Design

## 1. Client

The application used by users.

Examples:

- Web browser
- Mobile app
- Desktop application

```
User → Browser → Server
```

---

## 2. Web Server / Application Server

Handles requests from users.

Example:

- Node.js
- Express
- NestJS
- Spring Boot

```
Client
   |
Application Server
```

Responsibilities:

- Authentication
- Business logic
- Validation
- API responses

---

## 3. Database

Stores data permanently.

Examples:

### SQL Databases

- MySQL
- PostgreSQL

Good for:

- Transactions
- Relationships
- Consistency

### NoSQL Databases

- MongoDB
- Cassandra

Good for:

- Massive scale
- Flexible schemas

---

## 4. Cache

Stores frequently accessed data in memory.

Examples:

- Redis
- Memcached

Without cache:

```
Request
   |
Database
```

With cache:

```
Request
   |
Cache
   |
Database
```

Benefits:

- Faster responses
- Reduced database load

---

## 5. Load Balancer

Distributes traffic across multiple servers.

```
           Load Balancer
           /     |     \
        App1   App2   App3
```

Benefits:

- High availability
- Better performance
- Horizontal scaling

Common examples:

- NGINX
- HAProxy

---

## 6. Message Queue

Allows asynchronous processing.

Examples:

- RabbitMQ
- Apache Kafka

Example:

```
User creates lead
      |
API
      |
Queue
      |
Worker
      |
Send Email
```

User doesn't wait for email processing.

---

# Vertical vs Horizontal Scaling

## Vertical Scaling

Increase machine power.

```
4 GB RAM
   ↓
32 GB RAM
```

Pros:

- Simple

Cons:

- Expensive
- Hardware limits

---

## Horizontal Scaling

Add more servers.

```
Server1
Server2
Server3
Server4
```

Pros:

- Better scalability
- Fault tolerance

Cons:

- More complexity

Most modern systems use horizontal scaling.

---

# Availability vs Consistency

Important distributed systems concept.

### Availability

System always responds.

### Consistency

All users see the same data.

Example:

Bank account balance:

```
Balance = ₹1000
```

If one server shows ₹1000 and another shows ₹1200:

- Available? Yes
- Consistent? No

Trade-offs become important in distributed systems.

---

# Database Replication

Copies data to multiple databases.

```
          Primary
             |
      +------+------+
      |             |
   Replica1      Replica2
```

Benefits:

- Read scaling
- Backup
- High availability

---

# Database Sharding

Split data across databases.

Example:

```
Users A-M → DB1
Users N-Z → DB2
```

Benefits:

- Massive scale
- Reduced database load

---

# Content Delivery Network (CDN)

Stores static files closer to users.

Examples:

- Cloudflare
- Akamai Technologies

Without CDN:

```
India → USA Server
```

With CDN:

```
India → India Edge Server
```

Faster page loads.

---

# Typical High-Level Architecture

```text
Users
  |
DNS
  |
Load Balancer
  |
Application Servers
  |
+------------+
|            |
Cache      Database
|
Queue
|
Workers
```

---

# Common Interview Process

For a system design interview:

### Step 1: Gather Requirements

Ask:

- What features?
- Expected users?
- Read-heavy or write-heavy?

### Step 2: Estimate Scale

Example:

- 100k users
- 10k requests/sec

### Step 3: Design APIs

Example:

```http
POST /leads
GET /leads/:id
PUT /leads/:id
```

### Step 4: Design Database

Tables:

```text
users
leads
tasks
calls
```

### Step 5: Scale Components

Add:

- Cache
- Load balancer
- Replication
- Queues

### Step 6: Identify Bottlenecks

- Database overload
- Cache misses
- Network latency

---

# Roadmap

1. System Design Fundamentals
2. Scalability Concepts
3. Load Balancers
4. Caching
5. Databases (SQL & NoSQL)
6. Replication & Sharding
7. Message Queues
8. CAP Theorem
9. Distributed Systems Basics
10. Design Real Systems:
    - URL Shortener
    - WhatsApp
    - Instagram
    - Uber
    - YouTube
    - CRM Platform
