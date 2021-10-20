SELECT customers.companyname, SUM(unitprice*quantity)CA,country
FROM orderdetails,customers,orders
WHERE customers.customerid=orders.customerid
AND orderdetails.orderid=orders.orderiD
GROUP BY orders.customerid   HAVING CA>30000 
ORDER BY CA DESC ;