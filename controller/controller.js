// controller.js
const express = require("express");
const router = express.Router();
const model = require("../models/model");

let lastUserId = 0; // Variável para controlar o último ID utilizado

router.get("/", (req, res) => {
  const usuarios = model.listarUsuarios();
  res.json(usuarios);
});

router.post("/", (req, res) => {
  const { nome, idade, salario, profissao } = req.body;

  // Incrementar o ID antes de criar um novo usuário
  lastUserId++;
  const novoUsuario = new model.Usuario(lastUserId, nome, idade, salario, profissao);
  model.adicionarUsuario(novoUsuario);
  res.status(201).json(novoUsuario);
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { nome, idade, salario, profissao } = req.body;

  const usuarioAtualizado = model.atualizarUsuario(id, nome, idade, salario, profissao);
  if (usuarioAtualizado) {
    res.json(usuarioAtualizado);
  } else {
    res.status(404).json({ error: 'Usuário não encontrado' });
  }
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  const usuarioExcluido = model.excluirUsuario(id);
  if (usuarioExcluido) {
    res.json(usuarioExcluido);
  } else {
    res.status(404).json({ error: 'Usuário não encontrado' });
  }
});


module.exports = router;
