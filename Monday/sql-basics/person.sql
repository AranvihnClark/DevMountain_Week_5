-- ## Problem 1 ##
CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    age INT,
    height INT,
    city VARCHAR(20),
    favorite_color VARCHAR(10)
);

-- ## Problem 2 ##
INSERT INTO person (name, age, height, city, favorite_color)
VALUES ('Aranvihn', 31, 175, 'Brighton', 'Blue'),
        ('Steve', 41, 180, 'Brighton', 'Blue'),
        ('Garret', 26, 182, 'Saline', 'Red'),
        ('Rachel', 25, 158, 'Ann Arbor', 'Yellow'),
        ('Kelly', 40, 145, 'Canton', 'Green');

-- ## Problem 3 ##
SELECT * FROM person
ORDER BY height DESC;

-- ## Problem 4 ##
SELECT * FROM person
ORDER BY height;

-- ## Problem 5 ##
SELECT * FROM person
ORDER BY age DESC;

-- ## Problem 6 ##
SELECT * FROM person
WHERE age > 20;

-- ## Problem 7 ##
SELECT * FROM person
WHERE age = 18;

-- ## Problem 8 ##
SELECT * FROM person
WHERE age < 20 OR age > 30;

-- ## Problem 9 ##
SELECT * FROM person
WHERE age <> 27;

-- ## Problem 10 ##
SELECT * FROM person
WHERE favorite_color <> 'Red';

-- ## Problem 11 ##
SELECT * FROM person
WHERE favorite_color <> 'Blue' AND favorite_color <> 'Red';

-- ## Problem 12 ##
SELECT * FROM person
WHERE favorite_color = 'Orange' OR favorite_color = 'Green';

-- ## Problem 13 ##
SELECT * FROM person
WHERE favorite_color in ('Orange', 'Green', 'Blue');

-- ## Problem 14 ##
SELECT * FROM person
WHERE favorite_color in ('Yellow', 'Purple');