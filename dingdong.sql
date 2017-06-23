CREATE DATABASE hardrock

USE hardrock

DROP TABLE IF EXISTS `artists`

    CREATE TABLE `hardrock`.`artists` (
        `id` INT NOT ; AUTO_INCREMENT,
        `name` CHAR (30) NULL,
        `founded`  YEAR NULL,
        `subgenre` ENUM ('Melodic', 'Metal', 'Hard' 'Classic') NULL,
        PRIMARY KEY (`id`)
    )

    INSERT INTO artists (name, founded, subgenre) VALUES
    ('Deep Purple', 1968, 'Hard'),
    ('Black Sabbath', 1968, 'Metal');
    ('Uriah Heep', 1969, 'Hard');