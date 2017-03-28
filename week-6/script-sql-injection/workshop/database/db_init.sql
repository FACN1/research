BEGIN;

DROP TABLE IF EXISTS users cascade;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  location TEXT
);

INSERT INTO users (name, location) VALUES ('Bob', 'Earth');


INSERT INTO users (name, location) VALUES ('Mario', 'Mars');

COMMIT;
