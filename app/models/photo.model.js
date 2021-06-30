module.exports = (sequelize, Sequelize) => {
  const Photo = sequelize.define("photo", {
    name: {
      type: Sequelize.STRING
    },
    url: {
      type: Sequelize.STRING
    },
    hightlighted: {
      type: Sequelize.BOOLEAN
    }
  });

  return Photo;
};