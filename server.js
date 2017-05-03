var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');



// Pseudo Code/Notes
// Notes:
/*
Video Notes:
1. Node.js app, using mySQL as a database and handlebar to serve the html page. 
2. Single page app, most of the app action occurs on one page.
3. To use app: 1) put in a command to start the server (nodemon for instance). 2) type localhost:3000/index (the route that it will hit). 4) Leads to an input box with submit button. 5) For each submission, the output will show user input and a devour it button next to it. 5) when devour it button is clicked, the burgers text will fade and they will be aligned on the right-side. 6) This data will be saved in the mysql database.

All of the data is persistant 
*/