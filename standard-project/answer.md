# Database Fundamentals – Conceptual Understanding (Theory)

### 1. Why is db.json not suitable as a database for real projects?
* Explain the limitations of file-based storage
* Mention performance, scalability, and reliability issues

##### Ans. The db.json file is not suitable as a database for real projects because it is a simple file to store data and is basically used for learning and small practice projects.

**Limitations :**
* First, performance is very poor. Every operation reads or writes the full file, which becomes very slow when data grows.
* Second, scalability is limited. If many users try to access the file together, it cannot handle the load.
* Third, reliability is weak. If the file gets corrupted or deleted, all data is lost because there is no proper backup system.

### 2. What are the ideal characteristics of a database system (apart from just storage)?
* Explain characteristics such as:

    * Performance
    * Concurrency
    * Reliability
    * Data integrity
    * Scalability
    * Fault tolerance

##### Ans. The ideal characterstics of a database system are 
* Performance : Can handle thousands or millions of requests efficiently.
* Concurrency : Supports multiple users at the same time.
* Reliability : Data is not lost even if the system crashes.
* Data Integrity : Prevents invalid or duplicate data.
* Scalability : Can grow with increasing users and data.
* Fault tolerance : Continues working even if one part fails.

### 3. How many types of databases are there? What are their use cases or applications?
* Explain:
    * Relational databases
    * Non-relational (NoSQL) databases
    * Provide real-world use cases for each

##### Ans. There are mainly two types of databases.
**a. Relational Database :**
* These databases store data in structured tables.
* It has a fixed schema and structured relationship.
* Examples: MySQL, PostgreSQL, SQL Server.
* They are used in:
    * Banking systems
    * College databases
    * Inventory systems

**a. Non - Relational Database :**
* These databases store data in flexible formats like documents or key-value pairs.
* It has a flexible schema and higher scalability.
* Examples: MongoDB, Firebase, Redis.
* They are used in:
    * Social media apps
    * Messaging apps
    * Real-time dashboards