//Where we create tables
// module.exports = (sequelize, DataTypes) => {

module.exports = function (sequelize, DataTypes) {
    const Campsites = sequelize.define("Campsites", {
        name: DataTypes.STRING
    });
    return Campsites;
};


//Table for campsites ----Visited will be boolean value to filter out campsites between visited and wishlist

//To include on table:
//Campsite Name-STRING
//Campsite Location-STRING
//Rating-INTEGER
//Comments-TEXT
//hazVisited-BOOLEAN


