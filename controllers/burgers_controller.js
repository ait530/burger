var express = require("express");

var router = express.Router();

// Create all of our routes and set up logic within those routes wehere required.
var burger = require("../models/burger.js");



// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.create([
    "name", "baconBurger"
  ], [
    req.body.name, req.body.baconBurger
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var burgerType = "id = " + req.params.id;

  console.log("burgerType", condition);

  burger.update({
    baconBurger: req.body.baconBurger
  }, burgerType, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;