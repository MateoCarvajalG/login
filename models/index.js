const { Sequelize, DataTypes } = require("sequelize");
const UserModel = require("./users");
const FilmModel = require("./films");

// nombre, usuario, passwaord
const sequelize = new Sequelize("qLLo4hnsyc", "qLLo4hnsyc", "yc0jjAQ4yb", {
  host: "remotemysql.com",
  port: 3306,
  dialect: "mysql",
});

const User = UserModel(sequelize, Sequelize);
const Film = FilmModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log("Tablas sincronizadas");
});

module.exports = {
  User,
  Film,
};
