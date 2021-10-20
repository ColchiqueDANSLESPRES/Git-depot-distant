SELECT MAX(orderdate)
FROM orders, customers
WHERE orders.customerid=customers.customerid  
AND companyname='du monde entier';