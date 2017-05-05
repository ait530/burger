-- Creates burgers_db database
CREATE DATABASE burgers_db;

-- Uses burgers_db
USE burgers_db; 

CREATE TABLE burgers 
(
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  date TIMESTAMP, NOT NULL,
  PRIMARY KEY (id)
);    