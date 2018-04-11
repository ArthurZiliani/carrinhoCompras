const mongoose = require('mongoose')
const UsuariosModel = mongoose.model('Usuarios')

/***********
*
*  RECEBE TODOS OS USUÁRIOS
*
************/

exports.getAllUsuarios = async () => {
  return UsuariosModel.find()
}

/***********
*
*  RECEBE USUÁRIO POR ID
*
************/

exports.getUsuario = async (id) => {
  return UsuariosModel.find({_id: id})
}

/***********
*
*  ADICIONA USUÁRIO
*
************/

exports.addUsuario = async (data) => {
  const usuario = new UsuariosModel(data)
  return usuario.save()
}

/***********
*
*  EDITA USUÁRIO
*
************/

exports.editUsuario = async (id, data) => {
  return UsuariosModel.findOneAndUpdate(id, {
    $set: {
      nome: data.nome,
      email: data.email,
      senha: data.senha,
      data_nascimento: data.data_nascimento,
      // contato
      telefone: data.contato.telefone,
      celular: data.contato.celular,
      // endereco
      rua: data.endereco.rua,
      numero: data.endereco.numero,
      bairro: data.endereco.bairro,
      cidade: data.endereco.cidade,
      estado: data.endereco.estado,
      cep: data.endereco.cep
    }
  })
}

/***********
*
*  DELETA USUÁRIO
*
************/

exports.delUsuario = async (id) => {
  return UsuariosModel.findOneAndRemove({_id: id})
}

/***********
*
*  FILTRA USUÁRIO POR EMAIL
*
************/

exports.filterUsuarioByEmail = async (valor) => {
  return UsuariosModel.findOne({ email: valor })
}
