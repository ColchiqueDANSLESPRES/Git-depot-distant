SELECT ROUND(AVG(DATEDIFF(shippeddate,orderdate)))AS 'durée moyenne'
FROM orders
