DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (100),
    department_name VARCHAR (100),
    price DECIMAL (4,2),
    stock_quantity INT (4),
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
		('Item A', 'Department 1', 10.25, 45),
		('Item B', 'Department 1', 11.50, 40),
		('Item C', 'Department 1', 12.75, 35),
		('Item D', 'Department 1', 9.00, 50),
		('Item E', 'epartment 1', 14.00, 30),
		('Item F', 'epartment 2', 12.75, 35),
		('Item G', 'Department 2', 11.50, 40),
		('Item H', 'Department 2', 10.25, 45),
		('Item I', 'epartment 2', 9.00, 50),
		('Item J', 'epartment 2', 14.00, 30);

