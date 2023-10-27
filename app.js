// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controller = require('./controller/controller');
const port = 3000

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use('/', controller);

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`)
})
