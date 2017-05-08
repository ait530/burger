-- Creates burgers_db database
CREATE DATABASE IF NOT EXISTS burgers_db;

-- Uses burgers_db
USE burgers_db; 

-- Burgers table with the following:
CREATE TABLE burgers (
  id INTEGER (15) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR (55) NOT NULL,
  devoured BOOLEAN DEFAULT 0,
  date TIMESTAMP,
  PRIMARY KEY (id)
);
