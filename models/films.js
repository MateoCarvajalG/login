module.exports = (sequelize, type) => {
  return sequelize.define("film", {
    // Model attributes are defined here
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: type.STRING,
    desciption: type.STRING,
    score: type.STRING,
    director: type.STRING,
  });
};
