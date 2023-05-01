-- ## Problem 1 ##
INSERT INTO artist (name)
VALUES ('Jonathan'),
        ('Rebecca'),
        ('Stanley');
-- ## Problem 2 ##
SELECT * FROM artist
ORDER BY name DESC
LIMIT 10;

-- ## Problem 3 ##
SELECT * FROM artist
ORDER BY name ASC -- Though, really, you don't need the "ASC" as it defaults to it...
LIMIT 5;

-- ## Problem 4 ##
SELECT * FROM artist
WHERE name LIKE 'Black%';

-- ## Problem 5 ##
SELECT * FROM artist
WHERE name LIKE '%Black%';