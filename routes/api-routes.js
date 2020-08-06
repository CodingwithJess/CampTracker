// api-routes.js - this file offers a set of routes for displaying and saving data to the db

// Dependencies

//Require model
const { db } = require("../models");

//Routes
//GET ROUTES-This shows the data from the datebase on the page
module.exports = function (app) {
  // GET route for getting all posts
  app.get("/api/campsites/", function (req, res) {
    Campsite.findAll({})
      .then(function (Campsite) {
        res.json(Campsite);
            });

    });
    // future get routes for desired searches



    app.post("/api/campsites", function (req, res) {
        Campsite.create({
            name: req.body.name,
            body: req.body.body,
            location: req.body.location
        })
            .then(function (Campsite) {
                res.json(Campsite);
            });

    });
};

//POST ROUTES-This enters users input into the database


//DELETE ROUTES-This deletes selected id from page AND database


//PUT ROUTES-UPDATE-This updates data already stored in database

