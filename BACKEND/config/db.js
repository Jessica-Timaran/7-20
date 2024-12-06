const { Pool } = require("pg");

const pool = new Pool({
    host: "aws-0-us-west-1.pooler.supabase.com", // Host de tu Supabase
    port: 6543, // Puerto de Supabase
    database: "postgres", // Nombre de tu base de datos
    user: "postgres.gsxbfogvrknrvraevzdp", // Usuario con sufijo
    password: "gestiondepedidos", // Contraseña de tu base de datos
});

module.exports = pool;
