Bamazon - A CLI Application that simulates buying and selling products from an online retailer.


*Preface: This application requires a connection to a database server that houses a list of available merchandise and their associated costs, quantitys, names and uniqe ID numbers.

*The customer/user will be given a list of all inventory at which point they will input the item id and quantity. The application will check for availability and fill the order accordingly. 

*Problems with the application
    - I got to the point where I was able to build the table, populate and return results to the user via node.js
    -I was also able to verify the connection to the database, and prompt the user for input/record this input for future use
    -Where I ran into issues were my code was all excuting simultaneously and because of this my application was erroring when trying to query the database for an item number for which it had not received an input yet.
    
    -Given below are screenshots of the 'Working' functionality of this application
* ![Screenshot1] (/images/capture1.png)
* ![Screenshot2] (/images/capture2.png)
* ![Screenshot3] (/images/capture3.png)
