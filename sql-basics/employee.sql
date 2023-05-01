-- ## Problem 1 ##
SELECT firstName, lastName from employee
WHERE city = 'Calgary';

-- ## Problem 2 ##
-- Because the youngest would have a higher birth year, we want to use "MAX".
SELECT MAX(birth_date) FROM employee;

-- ## Problem 3 ##
-- And because the oldest would have the lowest birth year, we want to use "MIN".
SELECT MIN(birth_date) FROM employee;

-- ## Problem 4 ##
SELECT * FROM employee
WHERE reports_to = 2;

-- ## Problem 5 ##
SELECT COUNT(*) FROM employee
WHERE city = 'Lethbridge';