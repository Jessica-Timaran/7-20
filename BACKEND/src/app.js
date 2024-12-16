const express = require("express");
const app = express();
const cors = require("cors");

// Importar rutas
const userRoutes = require("../routes/userRoutes"); // Esta es la correcta
const MeseroRoutes = require("../routes/MeseroRoutes"); // Esta es la correcta

// Middleware
app.use(cors());
app.use(express.json()); // Para manejar JSON en las solicitudes

// Usar rutas
app.use("/api/users", userRoutes);
app.use("/api/mesero", MeseroRoutes);

// Ruta base
app.get("/", (req, res) => {
    res.send("¡Servidor funcionando!");
});

// Iniciar servidor
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
