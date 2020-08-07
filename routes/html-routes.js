// !! WE MIGHT NOT NEED THIS FILE WITH HANDLEBARS
const path = require("path");
// html-routes.js - this file offers a set of routes for sending users to the various html pages
const db = require("../models");
//Dependencies-require path

//Routes- module.exports

//app.get for all of the html files/handlebars???

module.exports = function(app){
  app.get("/", function(req, res){
    res.render(path.join(__dirname, "../views/index.handlebars"));
  });

  app.get("/saved", function(req, res){
    db.Campsite.findAll({
      where:{hasVisited:true},
      raw:true
    }).then(data => {
      res.render("savedcampgrounds", {campsite: data})
    })
  });
  
  app.get("/wishlist", function(req, res){
    db.Campsite.findAll({
      where:{hasVisited:false},
      raw:true
    }).then(data => {
      res.render("wishlist", {campsite: data})
    })
  });
};
// res.render(path.join(__dirname, "../views/savedcampgrounds.handlebars"));