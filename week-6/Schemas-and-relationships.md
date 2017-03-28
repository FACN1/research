# Schemas and relationships

## What is a database schema?
- A visual representation of a database and a set of rules for the contents and structure of that database, and how the elements that make up the database relate to each other.

- Typically created to help programmers write software that interacts with the database.

- "Data modelling" = The process of creating a database schema.

- You can think of a schema as a container of objects, that are logically grouped together as tables.

- A schema can be owned by any user, and that ownership is transferrable.

### Why/when would you need one?
- When writing a database that may be used by others (and therefore writing a schema) so that future users will understand how your database is structured.

- When writing software that will interact with someone else's database - you will need to know how to navigate the database.

### What are primary keys and why do we need them?
- A primary key is a field in a table which uniquely identifies each row/record in a database table, and provides a way for developers to reference a particular row within a database table.

- Primary keys must contain unique values.
- A primary key column cannot have NULL values.

``` sql
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (ID)
);
```
#### - OR -

``` sql
CREATE TABLE Persons (
    ID int NOT NULL PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
);

```
### Create a visual representation of a mock schema for a database about Founders & Coders, using as many different kinds of relationship as you can. Explain the logic behind it.

Founders and Coders:
- People
    - Mentors
    - Students
    - Applicants
    - Directors

- Curriculum
    - Pre-requisits
    - Pre-course
    - Week 1
    - Week 2
    - Week 3
