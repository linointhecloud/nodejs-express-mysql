module.exports = (sequelize, Sequelize) => {
  const Place = sequelize.define("place", {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    longitude: {
      type: Sequelize.DECIMAL(11,8)
    },
    latitude: {
      type: Sequelize.DECIMAL(10,8)
    }
  });

  return Place;
};