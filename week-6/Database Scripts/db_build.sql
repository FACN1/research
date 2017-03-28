BEGIN;

-- This deletes the database if it already exists
DROP DATABASE IF EXISTS researchExample;

-- This is how we create the database
CREATE DATABASE researchExample;

-- drop table
DROP TABLE IF EXISTS users;

-- create table
CREATE TABLE users {
  id        integer       PRIMARY KEY SERIAL,
  bio       text          NOT NULL,
  name      varchar(50)   NOT NULL,
  username  varchar(20)   NOT NULL   UNIQUE,
  creationDate    date,
  isBanned    boolean     NOT NULL  DEFAULT FALSE
};


-- add/remove/modify data

INSERT INTO users (bio, name, username, creationDate) VALUES
('loves hippos', 'matt', 'mattlub', '1914-7-28'),
('loves dogs', 'mario', 'karyum', '1954-1-8'),
('loves yoga', 'lawson', 'yogateacher', '1919-12-18');

-- with no column names specified
INSERT INTO users
VALUES ('loves dogs', 'mario', 'karyum', '1954-1-8', TRUE);


-- alter table (add, delete, modify)

-- this add a column to the table
ALTER TABLE users
ADD email varchar(100) NOT NULL;

-- this deletes a column from the table
--ALTER TABLE users
--DROP COLUMN email;

-- this modifies the column datatype
ALTER TABLE users
ALTER COLUMN email text;



COMMIT;
