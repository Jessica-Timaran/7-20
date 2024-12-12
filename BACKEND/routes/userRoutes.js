const express = require("express");
const router = express.Router();

// Importación del controlador de usuarios
const userController = require("../controllers/userController");

// Ruta para registrar un usuario
router.post("/register", userController.registerUser);

module.exports = router;
