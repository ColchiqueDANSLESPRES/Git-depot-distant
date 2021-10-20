SELECT customers.country
FROM customers,orders,orderdetails,products,suppliers
WHERE orders.orderid=orderdetails.OrderID
AND  customers.customerid=orders.customerid 
AND products.ProductID=orderdetails.ProductID
AND  suppliers.SupplierID=products.supplierid
AND  suppliers.companyname='exotic liquids'
GROUP BY customers.country