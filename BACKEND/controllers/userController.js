const pool = require("../config/db"); // Importa la configuración de la base de datos
const bcrypt = require("bcrypt"); // Biblioteca para encriptar contraseñas

// Controlador para registrar un usuario
const registerUser = async (req, res) => {
  const { nombre, correo, contraseña } = req.body;

  // Validaciones básicas
  if (!nombre || !correo || !contraseña) {
    return res.status(400).json({ message: "Todos los campos son obligatorios" });
  }

  try {
    // Encriptar la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    // Insertar datos en la base de datos
    const query = `
      INSERT INTO usuarios (nombre, correo, contraseña, estado, idrol)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING idusuarios;
    `;
    const values = [nombre, correo, hashedPassword, "activo", 2]; // Rol predeterminado: 2 (por ejemplo, usuario)

    const result = await pool.query(query, values);

    // Enviar respuesta exitosa
    res.status(201).json({
      message: "Usuario registrado con éxito",
      userId: result.rows[0].idpersonas,
    });
  } catch (error) {
    console.error("Error al registrar usuario:", error);

    // Manejo de errores específicos (ejemplo: correo duplicado)
    if (error.code === "23505") { // Código de error de PostgreSQL para duplicados
      return res.status(409).json({ message: "El correo ya está registrado" });
    }

    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = { registerUser };
