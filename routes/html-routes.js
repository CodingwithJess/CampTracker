// !! WE MIGHT NOT NEED THIS FILE WITH HANDLEBARS
const path = require("path");
// html-routes.js - this file offers a set of routes for sending users to the various html pages

//Dependencies-require path

//Routes- module.exports

//app.get for all of the html files/handlebars???

module.exports = function(app){
  app.get("/", function(req, res){
    res.render(path.join(__dirname, "../views/index.handlebars"));
  });

  app.get("/saved", function(req, res){
    res.render(path.join(__dirname, "../views/savedcampgrounds.handlebars"));
  });

  app.get("/wishlist", function(req, res){
    res.render(path.join(__dirname, "../views/wishlist.handlebars"));
  });
};