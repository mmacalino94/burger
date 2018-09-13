 var express = require("express");
 var burger = require("../models/burger.js");
 var router = express.Router();

 router.get("/", function(req, res) {
     burger.SelectAll(function(data)    {
         var hbsObject = {
             burgers: data
         };
         console.log(hbsObject);
         res.render("index", hbsObject);
     });
 });

 router.post("/api/burgers", function(req, res) {
     console.log(req.body);
    burger.insertOne([
        "burger_name"
    ],  [
        req.body.burger_name
    ], function(data)   {
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
   burger.updateOne(    {
       devoured: true},
       condition, function(data){
           res.json("/")
       });
});

router.delete("/api/burgers/:id", function(req, res)    {
    var condition = "id = " + req.params.id;
    burger.delete(condition, function(data) {
        res.render("/");
    });
});

module.exports = router;