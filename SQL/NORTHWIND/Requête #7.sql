SELECT  SUM(unitprice*quantity)
FROM orderdetails,orders
WHERE YEAR(orderdate)=1997
AND orders.orderid=orderdetails.orderid;
