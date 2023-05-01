-- How to create a table
CREATE TABLE melons(
  id SERIAL PRIMARY KEY,
  melon_type VARCHAR(30),
  name VARCHAR(30),
  price FLOAT,
  seedless BOOLEAN
);

-- "INSERT INTO" examples. How to add to a table.
INSERT INTO melons (melon_type, name, price, seedless)
VALUES ('Musk', 'Honeydew', 1, false);

INSERT INTO melons (melon_type, name, price, seedless)
VALUES('Musk', 'Casaba', 2.5, false),
        ('Musk', 'Cantaloupe', 0.99, false),
        ('Musk', 'Persian Melon', 3, false),
        ('Musk', 'Christmas Melon', 5.5, false),
        ('Musk', 'Armenian Cucumber', 4.5, false),
        ('Hybrid', 'Galia', 3.75, false),
        ('Winter', 'Winter Melon', 0.99, true),
        ('Musk', 'Canary', 1.5, false),
        ('Musk', 'Hami', 2.75, true),
        ('Watermelon', 'Densuke', 250, false),
        ('Watermelon', 'Ali Baba', 2.5, false),
        ('Watermelon', 'Ancient', 3, false),
        ('Watermelon', 'Arkansas Black', 4, false),
        ('Watermelon', 'Dixie Queen', 2, false),
        ('Watermelon', 'Blacktail Mountain', 2.75, true),
        ('Watermelon', 'Carolina Cross 180', 4.25, false),
        ('Watermelon', 'Charleston Gray', 2, false),
        ('Watermelon', 'Chris Cross', 2.5, false),
        ('Watermelon', 'Desert King', 2, false),
        ('Watermelon', 'Congo', 2, false),
        ('Watermelon', 'Crimson Sweet', 1.75, false);

-- "SELECT" examples. How to get info of the table.
SELECT name, price from melons;

SELECT name FROM melons
WHERE seedless = True AND melon_type = 'Watermelon';

SELECT * FROM melons
WHERE price > 3;

SELECT melon_type FROM melons 
GROUP BY melon_type;

SELECT melon_type, COUNT(*) FROM melons 
GROUP BY melon_type;

SELECT melon_type, COUNT(*)
FROM melons
GROUP BY melon_type
ORDER BY COUNT;

SELECT seedless, COUNT(seedless), AVG(price)
FROM melons
GROUP BY seedless;

SELECT * FROM melons
WHERE melon_type <> 'Watermelon'
ORDER BY name DESC;

SELECT * FROM melons
WHERE melon_type <> 'Watermelon'
ORDER BY melon_type, name;

SELECT * FROM melons
OFFSET 5
LIMIT 5;

-- "UPDATE" examples. How to update info on the table.
UPDATE melons
SET seedless = true
WHERE melon_type = 'Musk';
SELECT * FROM melons;

UPDATE melons
SET seedless = true
WHERE id = 12;
SELECT * FROM melons
ORDER BY id;

-- "DELETE" example. How to delete info on the table.
DELETE FROM melons
WHERE id < 3;
SELECT * FROM melons
ORDER BY id;