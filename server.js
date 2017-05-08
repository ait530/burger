// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// http://localhost:3000 to access this computer/test this software
var port = 3000;

// Set express web application framework variable
var app = express();


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);


// Pseudo Code/Notes
// Notes:
/*
Video Notes:
1. Node.js app, using mySQL as a database and handlebar to serve the html page. 
2. Single page app, most of the app action occurs on one page.
3. To use app: 1) put in a command to start the server (nodemon for instance). 2) type localhost:3000/index (the route that it will hit). 4) Leads to an input box with submit button. 5) For each submission, the output will show user input and a devour it button next to it. 5) when devour it button is clicked, the burgers text will fade and they will be aligned on the right-side. 6) This data will be saved in the mysql database.

All of the data is persistant 
*/


