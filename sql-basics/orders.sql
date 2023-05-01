-- ## Problem 1 ##
CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    person_id INTEGER,
    product_name VARCHAR(30),
    product_price FLOAT,
    quantity INTEGER
);
-- ## Problem 2 ##
INSERT INTO orders (person_id, product_name, product_price, quantity)
VALUES (1, 'Blanket', 21.99, 2),
        (1, 'Pillow', 6.50, 4),
        (2, 'Blanket', 21.99, 1),
        (2, 'Pillow Case', 1.99, 3),
        (3, 'Belt', 12.99, 1);

-- ## Problem 3 ##
SELECT * FROM orders;

-- ## Problem 4 ##
SELECT SUM(quantity) FROM orders;

-- ## Problem 5 ##
SELECT SUM(product_price * quantity) FROM orders;

-- ## Problem 6 ##
SELECT SUM(product_price * quantity) FROM orders
WHERE person_id = 1;

-- More for me in case if I need a reference.
-- This will show all indivduals' price total:

-- SELECT person_id, SUM(product_price * quantity) FROM orders
-- GROUP BY person_id;