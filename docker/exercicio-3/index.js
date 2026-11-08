const express = require('express');
const { Pool } = require('pg'); 

const app = express();
const port = 3000;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 5432,
});

pool.query(`
  CREATE TABLE IF NOT EXISTS visitas (
    id SERIAL PRIMARY KEY,
    data_visita TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`).catch(err => console.error("Erro ao criar tabela:", err));

app.get('/', async (req, res) => {
  try {
    await pool.query('INSERT INTO visitas DEFAULT VALUES');
    
    const result = await pool.query('SELECT COUNT(*) AS total FROM visitas');
    const total = result.rows[0].total;

    res.send(`<h1>hackeando a produção</h1><p>Você e outras pessoas já visitaram esta página <b>${total}</b> vezes. O banco está salvando tudo!</p>`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao conectar no banco de dados');
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`API conectada e rodando na porta ${port}`);
});