-- ## Problem 1 ##
SELECT COUNT(*) FROM invoice
WHERE billing_country = 'USA';

-- ## Problem 2 ##
SELECT MAX(total) FROM invoice;

-- ## Problem 3 ##
SELECT MIN(total) FROM invoice;

-- ## Problem 4 ##
SELECT * FROM invoice
WHERE total > 5;
-- ## Problem 5 ##
SELECT COUNT(*) FROM invoice
WHERE total < 5;

-- ## Problem 6 ##
SELECT COUNT(*) FROM invoice
WHERE billing_state IN ('CA', 'TX', 'AZ')

-- ## Problem 7 ##
SELECT AVG(total) FROM invoice;

-- ## Problem 8 ##
SELECT SUM(total) FROM invoice;

-- ## Problem 9 ##
UPDATE invoice
SET total = 24
WHERE invoice_id = 5;

-- ## Problem 10 ##
-- Though an error popped up indicating the following `error: update or delete on table "invoice" violates foreign key constraint "invoice_line_invoice_id_fkey" on table "invoice_line"`, the below is how it would be done if there wasn't a foreign key constraint.
DELETE FROM invoice
WHERE invoice_id = 1;