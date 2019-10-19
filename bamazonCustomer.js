//Initializing Node Apps
require("dotenv").config();
const keys = require("./keys.js");
const mysql = require("mysql");
const inquirer = require("inquirer");

//Initializing connection tto mysql
const mysqlKey = keys.mysqlKey;
const connection = mysql.createConnection({
  host: 3306,
  user: mysqlKey.user,
  password: mysqlKey.password,
  database: mysqlKey.database
});

//Function for purchasing items
const purchase = function(itemID, requestedQuantity) {
  connection.query(
    `SELECT product_name, price, stock_quantity 
    FROM products 
    WHERE item_id = ${itemID}`,
    function(error, results, fields) {
      if (error) throw error;
      if (results[0].stock_quantity < requestedQuantity) {
        console.log(`Insufficient Quantity!`);
        viewProducts();
        connection.end();
      } else {
        const newStock = results[0].stock_quantity - requestedQuantity;
        const amountDue = results[0].price * requestedQuantity;
        connection.query(
          `UPDATE products SET stock_quantity = ${newStock} WHERE item_id = ${itemID};`,
          function(error, results, fields) {
            if (error) throw error;
            console.log("Your total is: $" + amountDue);
            console.log("Updated stock:", newStock, "more unit(s) available");
            console.log(`_________________________________`);
          }
        );
        viewProducts();
        connection.end();
      }
    }
  );
};

//Function to view stock and prompt a purchase
const begin = function() {
  connection.query(
    `SELECT item_id, product_name, price, stock_quantity FROM products`,
    function(error, results, fields) {
      if (error) throw error;
      console.log(`_________________________________`);
      results.forEach(element => {
        console.log(
          `${element.item_id}:`,
          `${element.product_name}--`,
          `$${element.price}`,
          ` -- ${element.stock_quantity} units`
        );
      });
      console.log(` `);
      inquirer
        .prompt([
          {
            type: "number",
            message:
              "Please provide the numeric Product ID you would like to purchase:",
            name: "id"
          },
          {
            type: "number",
            message: "How many of this item would you like?",
            name: "number"
          }
        ])
        .then(answer => {
          const productID = answer.id;
          const requestedQuantity = answer.number;
          console.log(requestedQuantity, "units requested");
          purchase(productID, requestedQuantity);
        });
    }
  );
};
const viewProducts = function() {
  connection.query(
    `SELECT item_id, product_name, price, stock_quantity FROM products`,
    function(error, results, fields) {
      if (error) throw error;
      console.log("");
      console.log(`*_*^*UPDATED STOCK*^*_*`);
      console.log(`---------------------------------`);
      results.forEach(element => {
        console.log(
          `${element.item_id}:`,
          `${element.product_name}--`,
          `$${element.price}`,
          ` -- ${element.stock_quantity} units left in stock`
        );
      });
    }
  );
};
connection.connect();
begin();
