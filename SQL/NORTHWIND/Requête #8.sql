SELECT MONTH(orderdate) 'Mois 1997',SUM(unitprice*quantity)'MONTANT DES VENTES'
FROM orderdetails,orders
where YEAR(orderdate)=1997
AND orders.orderid=orderdetails.orderid
GROUP BY MONTH(orderdate);