# Database Relationships

### Define a database relationship. Explain the types of database relationships and illustrate how each type is applied in an e-commerce application.

#### Definition of database relationship

A database relationship shows that how two or more database tables are connected using keys.It represents the connection between two tables.
Relationships of the database are created using two keys. They are:

**Primary Key (PK)** : It is known as a unique identifier.
**Foreign Key (FK)**: It is a column that references the primary key of another table.

Relationships help to 
* Avoid data redundancy 
* Maintain data integrity
* Structures complex data.

![Database Relationship](https://www.smartsheet.com/sites/default/files/ic-one-to-many-database-relationship-examples.jpg)

#### Types of relationships

There are three types of database relationships:

1. One-to-One (1:1)
2. One-to-Many (1:N)
3. Many-to-Many (M:N)

1. **1:1** - In one to one relationships, a record is present in one table along with its corresponding existing relation, and the vacant relation among the records is present in another table. 
**E-commerce Example:**
* User and UserProfile
* Each user has only one profile.
* Each profile belongs to only one user.

2. **1:N** - A relationship where the items from one table can be linked to only one or many items from another table is called a one-to-many relationship; in some cases, one item from the first table correlates with only one item from the second table.
**E-commerce Example:**
* One customer can place many orders.
* Each order belongs to only one customer.

3. **M:N** - The duality of a many-to-many relationship is characterized by the presence of multiple records belonging to a table in association with multiple records from another table. 
**E-commerce Example:**
* One order can contain many products.
* One product can appear in many orders.

![Database Relationship Types](https://miro.medium.com/1*GJIlH2C3LhAXwlIO4iLepQ.png)