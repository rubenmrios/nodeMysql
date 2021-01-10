
-- create schemas
CREATE SCHEMA masterclass;

-- use database users for add table
use masterClass;

-- create table
CREATE TABLE users (
	user_id INT AUTO_INCREMENT  PRIMARY KEY,
	first_name VARCHAR (255) NOT NULL,
	last_name VARCHAR (255) NOT NULL,
    email VARCHAR (255) NOT NULL,
    password_user VARCHAR (255) NOT NULL,
	age INT NOT NULL,
	country VARCHAR (255) NOT NULL
);

-- create a new record for users table 
INSERT INTO users (first_name, last_name, email, password_user, age, country)
VALUES ('Ruben', 'Muñoz', 'ruben@example.com', '123456', '30', 'Spain');