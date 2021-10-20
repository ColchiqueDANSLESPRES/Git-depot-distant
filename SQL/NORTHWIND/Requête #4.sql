SELECT companyname,COUNT(orders.customerid)
FROM   orders,customers
WHERE customers.CustomerID=orders.customerid AND country='france'
GROUP  BY companyname
HAVING COUNT(orders.customerid) >10;