const express = require("express");
const routes = express.Router();
// const db = require("./db");
// const { getUserById } = require("./helpers");
// const req = require("express/lib/request");
const userController = require("./controllers/userController");
const authController = require("./controllers/authController");
const authMiddleware = require("./middlewares/authMidleware");


// Ruta básica de prueba
routes.get("/", (req, res) => {
  res.send("Hello World!");
});

routes.post("/login", authController.login);

routes.post("/create-update-user", authMiddleware, userController.createOrUpdateUser);
routes.get("/usersview", authMiddleware, userController.getUsers);
routes.delete("/delete-user", authMiddleware, userController.deleteUser);

module.exports = routes;
