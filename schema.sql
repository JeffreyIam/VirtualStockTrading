USE stock;

CREATE TABLE User (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(15),
    lastname VARCHAR(15),
    username VARCHAR(20),
    password VARCHAR(20),
    users_created timestamp DEFAULT NOW()
);

CREATE TABLE GroupRoom (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30),
    isActive INT,
    group_created timestamp DEFAULT NOW()
);



