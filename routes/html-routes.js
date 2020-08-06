// !! WE MIGHT NOT NEED THIS FILE WITH HANDLEBARS
const path = require("path");
// html-routes.js - this file offers a set of routes for sending users to the various html pages

//Dependencies-require path

//Routes- module.exports

//app.get for all of the html files/handlebars???

module.exports = function(app){
  app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.handlebars"));
  });

  app.get("/saved", function(req, res){
    res.sendFile(path.join(__dirname, "../public/savedcampground.handlebars"));
  });

  app.get("/wishlist", function(req, res){
    res.sendFile(path.join(__dirname, "../public/wishlist.handlebars"));
  });
};