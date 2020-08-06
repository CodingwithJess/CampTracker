// api-routes.js - this file offers a set of routes for displaying and saving data to the db

// Dependencies

//Require model
const { Campsite } = require("../models");

//Routes
//GET ROUTES-This shows the data from the datebase on the page
module.exports = function (app) {
    // GET route for getting all posts
    app.get("/api/campsites/", function (req, res) {
        Campsite.findAll({})
            .then(function (Campsite) {
                res.json(Campsite)
            });

    });

    app.get("/api/campsites/rating/:id", function (req, res) {
        Campsite.findAll({
            where: {
                id: req.params.id
            }
        }).then(function (Campsite) {
            res.json(Campsite);
        });
    });

    app.get("/api/campsites/location/:id", function (req, res) {
        Campsite.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (Campsite) {
            res.json(Campsite);
        });
    });



    // route to post to campsites
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

    // post route to wishlist campsite
    app.post("/api/campsites/wishlist", function (req, res) {
        Campsite.create({
            name: req.body.name,
            description: req.body.description,
            location: req.body.location,
            wishlist: req.body.wishlist
        }).then(function (Campsite) {
            res.json(Campsite)
        });
    });

    app.delete("/api/campsites/:id", function (req, res) {
        Campsite.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (Campsite) {
            res.json(Campsite);
        });
    });

    app.put("/api/campsites", function (req, res) {
        Campsite.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (Campsite) {
                res.json(Campsite);
            })
    })



};

// future get routes for desired searches
//POST ROUTES-This enters users input into the database



//DELETE ROUTES-This deletes selected id from page AND database


//PUT ROUTES-UPDATE-This updates data already stored in database

// Campsite Name-STRING
// //Campsite Location-STRING
// //Rating-INTEGER
// //Comments-TEXT
// wishlist-STRING
// //hazVisited-BOOLEAN