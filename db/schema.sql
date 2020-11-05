CREATE DATABASE records_db;

use records_db;

CREATE TABLE topSongs;(
    id int NOT NULL AUTO_INCREMENT,
    song varchar (50),
    artist varchar (50),
    album varchar (50),
    PRIMARY KEY (id)
);

CREATE TABLE topAlbums;(
    id int NOT NULL AUTO_INCREMENT,
    album varchar (50),
    artist varchar (50),
    PRIMARY KEY (id)
);

CREATE TABLE topArtists;(
    id int NOT NULL AUTO_INCREMENT,
    artist varchar (50),
    PRIMARY KEY (id)
);