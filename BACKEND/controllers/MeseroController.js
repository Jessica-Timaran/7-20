const pool = require("../config/db");

module.exports = {
  // Crear un nuevo pedido
  crearPedido: async (req, res) => {
    const { mesa, plato, cantidad, valor_unitario, valor_total, id_usuarios } = req.body;
    try {
      // Validar que el usuario exista
      const verificarUsuario = await pool.query(
        "SELECT * FROM usuarios WHERE idusuarios = $1",
        [id_usuarios]
      );

      if (verificarUsuario.rowCount === 0) {
        return res.status(400).json({ message: "El usuario no existe" });
      }

      // Insertar el pedido en la base de datos
      const result = await pool.query(
        "INSERT INTO pedidos (mesa, cantidad, plato, valor_unitario, valor_total, creado_en, id_usuarios) VALUES ($1, $2, $3, $4, $5, NOW(), $6)",
        [mesa, cantidad, plato, valor_unitario, valor_total, id_usuarios]
      );

      res.status(201).json({ message: "Pedido creado exitosamente" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al crear el pedido" });
    }
  },
};
