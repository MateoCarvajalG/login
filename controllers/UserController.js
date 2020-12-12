const models = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res, next) => {
  try {
    const user = await models.User.findOne({
      where: { email: req.body.email },
    });
    if (user) {
      const passwordIsInvalid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (passwordIsInvalid) {
        const token = jwt.sign(
          {
            id: user.id,
            name: user.name,
            email: user.email,
          },
          "config.secret",
          {
            expires: 86400, //24 horas
          }
        );
        res.status(200).send({ auth: true, accessToken: token, user: user });
      } else {
        res.json({
          error: "Error en usuario o contraseña",
        });
      }
    } else {
      res.json({ error: "Error en usuario o contraseña" });
    }
  } catch (error) {
    res.startus(500),
      send({
        message: "Error!!",
      });
    next(e);
  }
};
