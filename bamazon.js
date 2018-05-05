var prompt = require('prompt');
var mysql = require('mysql');

prompt.start();

  //
  // Get two properties from the user: username and email
  //
  prompt.get(['product_id', 'units'], function (err, result) {
    //
    // Log the results.
    //
    //result.product_id
    //result.units

    
  });


var connection = mysql.createConnection({
  host: "localhost",

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM Products" , function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });

}

