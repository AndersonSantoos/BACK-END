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
  if (usuarios[id]) {
    usuarios[id].nome = nome;
    usuarios[id].idade = idade;
    usuarios[id].salario = salario;
    usuarios[id].profissao = profissao;
    return usuarios[id];
  }
  return null;
}

function excluirUsuario(id) {
  if (usuarios[id]) {
    const usuarioExcluido = usuarios.splice(id, 1);
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
