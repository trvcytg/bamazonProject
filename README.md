# bamazonProject

"Bamazon is a mock version of a command line marketplace with realtime updates to stock upon selection."

Provides a user interface to direct a purchase of items from a set database. Includes, names, item ID's, price, and quantity currently in stock. Upon selection, you may determine the quantity you would like, at which point it will tell you your total, as well as the remaining number of units in stock.

I use a key file to pull sensitive keys from my .env file for use in the code.

## How To Run:

    - clone this repository to your local machine
    - Get your own keys for your server
    - run "npm i"
    - place them into your .env file located at the top level of the project directory
    - run "node bamazonCustomer.js"
    - follow prompts

## Video of Functioning App:

![Bamazon Homework][./bamazon.mov](https://drive.google.com/open?id=1XCxOk9KZmg6pwypJ2_AScikglKnL8ZQu)

## Sole developer: trvcytg

## NPM Resources Used:

    - dotenv
    - mysql
    - inquirer
