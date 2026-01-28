# Explain schema design in the context of relational databases.

<!-- What schema design is and what a database schema represents -->

Schema design is the process of planning and defining the structure of how data is organized in a relational database before creating tables.A database schema acts as a blueprint which provides a structure of a database such as defining the relationship between tables.
For example, There are two database tables orders and customers. The schema design defines the relationship between the tables using a forign key.  

<!-- Why schema design is required before writing backend code -->

Backend code completely depends on databases. So schema design makes the backend messy and unable to maintain if the schema design is not planned before.Without schema design, developers often keep changing tables later, which breaks APIs and causes bugs in production.

<!-- How poor schema design impacts data consistency, maintenance, and scalability -->

Poor schema design can lead to some major issues like data inconsistency, maintenance issues and scalability issues.
**Data Consistency** - Poor scema may arise data inconsistency as if same data exists multiple times it may lead to confusion.
**Maintence** - It will become difficult to maintain the database as small changes require updates in many tables.
**Scalability** - Poor design may affect in terms of scalability as queries can become slow as the data increase.

<!-- What validations are in schema design and why databases enforce validations (for example: NOT NULL, UNIQUE, DEFAULT, PRIMARY KEY) -->

Validations are rules enforced at the database level to protect data quality. Common validations include:

* NOT NULL – It prevents missing important values.
* UNIQUE – It avoids duplicate values like email or username.
* DEFAULT – It assigns a value if none is provided.
* PRIMARY KEY – It uniquely identifies each record.

<!-- The difference between a database schema and a database table -->

A database schema is an overall databse structure of the database where as a database table is one part in the database schema where the actual data is stored.

<!-- Why a table should represent only one entity -->

A table should represent only one entity because it makes the database easy to understand and update and also removes duplication. If it represents more entities it will create confusion.

<!-- Why redundant or derived data should be avoided in table design -->

Redundant data means storing the same information multiple times. Derived data is data that can be calculated from existing fields. Both should be avoided because:
* Redundant data causes inconsistency
* Derived data can become outdated
* Storage and updates increase unnecessarily
For example, storing both dateOfBirth and age is risky because age changes every year.

<!-- The importance of choosing correct data types while designing tables -->

Choosing correct data types while designing tables is important because it provides accuracy, improves perfomance and validation.