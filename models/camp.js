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
      allowNull: true,
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
        len: [1, 1000]
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




