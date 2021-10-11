DROP DATABASE IF EXISTS myapp;

CREATE DATABASE myqpp;
USE myapp;

create table lists(
id integer AUTO_INCREMENT,
value TEXT,
PRIMARY KEY (id)
    )