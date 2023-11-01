// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controller = require('./controller/controller');
const port = 3000
const cors = require('cors');   // lib para permissão de rodar esse projeto de outra origem

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurar o middleware CORS
app.use(cors());   //uso da lib para funcionar

app.use('/', controller);

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`)
})
