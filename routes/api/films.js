const router = require("express").Router();
const { Film } = require("../../models");
// const UserController = require("../../controllers/UserController.js");
const bcrypt = require("bcryptjs");

//films/
router.get("/", async (req, res) => {
  const film = await Film.findAll();
  res.status(200).json(film);
});

router.post("/register", async (req, res) => {
  const film = await Film.create(req.body);
  res.status(200).json(film);
});

module.exports = router;
