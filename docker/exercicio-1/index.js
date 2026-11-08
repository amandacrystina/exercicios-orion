const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Dockeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeer!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Aplicação rodando na porta ${port}`);
});