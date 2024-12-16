const express = require("express");
const router = express.Router();
const meseroController = require("../controllers/MeseroController");

router.post("/pedidos", meseroController.crearPedido);

module.exports = router;
