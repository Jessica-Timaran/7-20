const express = require("express");
const router = express.Router();

// Importar el controlador de usuarios
const userController = require("../controllers/userController");

// Ruta para registrar un nuevo usuario
router.post("/register", userController.registerUser);

module.exports = router;
