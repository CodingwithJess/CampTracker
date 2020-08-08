//Dependencies
const express = require("express");

// Sets up the ExpressApp
const PORT = process.env.PORT || 8080;
const app = express();

// requiring models for syncing
const db = require("./models");

//middleware for handlebars
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static directory
app.use(express.static("public"));

// ROUTES
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

//require the handlebars
const exphbs = require("express-handlebars");

//Sets up the Express app to handle data parsing
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Sync sequelize models and start express app
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT" + PORT);
    });
});