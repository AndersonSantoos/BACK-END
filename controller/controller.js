const express = require("express");
const model = ("./models/model")
const router = express.Router();

let usuario = [];

router.get("/", (req, res) => {
  res.json(usuario);
});


router.post("/", (req, res) => {
  const { id, nome, idade, salario, profissao } = req.body; // Correção na desestruturação
  const novoUsuario = {id, nome, idade, salario, profissao };
  usuario.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

 // Rota para atualizar um cadastro existente (PUT)
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { nome, idade, salario, profissao  } = req.body;
    usuario[id] = { nome, idade, salario, profissao };
    res.json(usuario[id]);
  });

  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const usuarioExcluido = usuario.splice(id, 1);
    res.json(usuarioExcluido);
  });
  

module.exports = router;