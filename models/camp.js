module.exports = function (sequelize, DataTypes) {
  const Campsite = sequelize.define("Campsite", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[1, 150]
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        max: 5,
        min: 0
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1, 200]
      }
    },
    hasVisited: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
  });
  return Campsite;
};


//Table for campsites ----Visited will be boolean value to filter out campsites between visited and wishlist

//To include on table:
//Campsite Name-STRING
//Campsite Location-STRING
//Rating-INTEGER
//Comments-TEXT
//hazVisited-BOOLEAN
//wishlist


