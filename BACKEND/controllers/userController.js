const pool = require("../config/db"); // Configuración de la base de datos
const bcrypt = require("bcrypt"); // Biblioteca para encriptar contraseñas
const jwt = require("jsonwebtoken"); 

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

// Controlador para iniciar sesión
const loginUser = async (req, res) => {
  const { correo, contraseña } = req.body;

  if (!correo || !contraseña) {
    return res.status(400).json({ error: "Correo y contraseña son obligatorios." });
  }

  try {
    // Buscar al usuario en la base de datos
    const query = "SELECT * FROM usuarios WHERE correo = $1";
    const result = await pool.query(query, [correo]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }

    const user = result.rows[0];

    // Comparar la contraseña ingresada con la almacenada
    const isMatch = await bcrypt.compare(contraseña, user.contraseña);
    if (!isMatch) {
      return res.status(401).json({ error: "Contraseña incorrecta." });
    }

    // Generar token JWT
    const token = jwt.sign({ id: user.idusuarios, correo: user.correo }, 'tu_clave_secreta', {
      expiresIn: '1h',
    });

    // Retornar el token y los datos del usuario
    res.status(200).json({
      message: "Inicio de sesión exitoso",
      token,
      user: {

        id: user.idusuarios,  // Asegúrate de que 'idusuarios' sea el campo correcto

        nombre: user.nombre,
        correo: user.correo,
        idrol: user.idrol
      }
    });
    

  } catch (err) {
    console.error("Error al iniciar sesión:", err);
    res.status(500).json({ error: "Error del servidor. Inténtalo más tarde." });
  }
};

module.exports = 
{
  registerUser,
  loginUser,
};