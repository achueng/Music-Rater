CREATE DATABASE records_db;

use records_db;

CREATE TABLE records;(
    id int NOT NULL AUTO_INCREMENT,
    song varchar (50),
    artist varchar (50),
    album varchar (50),
    PRIMARY KEY (id)
);