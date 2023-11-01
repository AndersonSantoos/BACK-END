// model.js
class Usuario {
  constructor(id, nome, idade, salario, profissao) {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
    this.salario = salario;
    this.profissao = profissao;
  }
}

const usuarios = [];

function listarUsuarios() {
  return usuarios;
}

function adicionarUsuario(usuario) {
  usuarios.push(usuario);
}

function atualizarUsuario(id, nome, idade, salario, profissao) {
  const usuario = usuarios.find(u => u.id === parseInt(id)); // Converta o ID para inteiro
  if (usuario) {
    usuario.nome = nome;
    usuario.idade = idade;
    usuario.salario = salario;
    usuario.profissao = profissao;
    return usuario;
  }
  return null;
}

function excluirUsuario(id) {
  const index = usuarios.findIndex(u => u.id === parseInt(id)); // Converta o ID para inteiro
  if (index !== -1) {
    const usuarioExcluido = usuarios.splice(index, 1);
    return usuarioExcluido[0];
  }
  return null;
}



module.exports = {
  Usuario,
  listarUsuarios,
  adicionarUsuario,
  atualizarUsuario,
  excluirUsuario,
};
