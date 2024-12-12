const pool = require("../config/db"); // Configuración de la base de datos
const bcrypt = require("bcrypt"); // Biblioteca para encriptar contraseñas

// Controlador para registrar un usuario
const registerUser = async (req, res) => {
  const { nombre, correo, contraseña, idrol } = req.body;

  if (!nombre || !correo || !contraseña || !idrol) {
    return res.status(400).json({ error: "Todos los campos son obligatorios." });
  }

  const roleId = parseInt(idrol, 10); // Conversión segura a entero

  if (isNaN(roleId)) {
    return res.status(400).json({ error: "El rol debe ser un número válido." });
  }

  try {
    // Encriptar la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(contraseña, salt);

    // Insertar el usuario en la base de datos
    const query = `
      INSERT INTO usuarios (nombre, correo, contraseña, idrol, fecha_creacion, estado)
      VALUES ($1, $2, $3, $4, NOW(), $5) RETURNING *;
    `;

    const values = [nombre, correo, hashedPassword, roleId, true];
    const result = await pool.query(query, values);

    const newUser = result.rows[0];
    delete newUser.contraseña;
    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error al registrar el usuario:", err);
    res.status(500).json({ error: "Error del servidor. Inténtalo más tarde." });
  }
};


module.exports = {
  registerUser,
};
