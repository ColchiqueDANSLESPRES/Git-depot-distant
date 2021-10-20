SELECT suppliers.companyname,COUNT(suppliers.supplierid) AS 'Nombre produit'
FROM products,suppliers
WHERE country='france' and suppliers.supplierid=products.supplierid
GROUP BY companyname
ORDER BY COUNT(suppliers.SupplierID)DESC; 