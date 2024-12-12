const express = require("express");
const router = express.Router();

// Importación del controlador de usuarios
const userController = require("../controllers/userController");

// Ruta para registrar un usuario
router.post("/register", userController.registerUser);

router.post("/login", userController.loginUser);  // Ruta de login


module.exports = router;
