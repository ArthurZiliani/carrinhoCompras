const mongoose = require('mongoose')
const UsuariosModel = mongoose.model('Usuarios')
const validator = require('../helpers/validator/validator')()

/***********
*
*  RECEBE TODOS OS USUÁRIOS
*
************/

exports.getAllUsuarios = async () => {
  const res = await UsuariosModel.find()
  return res
}

/***********
*
*  RECEBE USUÁRIO POR ID
*
************/

exports.getUsuario = async (id) => {
  const objectId = mongoose.Types.ObjectId(id)
  const res = await UsuariosModel.find({_id: objectId})
  return res
}

/***********
*
*  ADICIONA USUÁRIO
*
************/

exports.addUsuario = async (data) => {
  const usuario = new UsuariosModel(data)

  // validação
  /*validator.validate('Nome', usuario.nome, ['isRequired', 'isString', 'isMinLenght:3'])
  validator.validate('Email', usuario.email, ['isRequired', 'isEmail'])
  validator.validate('Senha', usuario.senha, ['isRequired', 'isMinLenght:6'])
  */
  const res = await usuario.save()
  return res
}

/***********
*
*  EDITA USUÁRIO
*
************/

exports.editUsuario = async (id, data) => {
  const objectId = mongoose.Types.ObjectId(id)

  // validação
  /*
  validator.validate('Nome', usuario.nome, ['isRequired', 'isString', 'isMinLenght:3'])
  validator.validate('Email', usuario.email, ['isRequired', 'isEmail'])
  validator.validate('Senha', usuario.senha, ['isRequired', 'isMinLenght:6'])
  validator.validate('Data de Nascimento', usuario.data_nascimento, ['isDate'])
  // contato
  validator.validate('Telefone', usuario.contato.telefone, ['isString', 'isMinLength:8'])
  validator.validate('Celular', usuario.contato.celular, ['isString', 'isMinLength:8'])
  // endereco
  validator.validate('Rua', usuario.endereco.rua, ['isString'])
  validator.validate('Número', usuario.endereco.numero, ['isNumeric', 'isGreatherThan:0'])
  validator.validate('Bairro', usuario.endereco.bairro, ['isString'])
  validator.validate('Cidade', usuario.endereco.cidade, ['isString'])
  validator.validate('Estado', usuario.endereco.estado, ['isString', 'isExactLength:2'])
  validator.validate('Cep', usuario.endereco.cep, ['isString', 'isMinLength:8'])
  */

  // edição
  const res = await UsuariosModel.findOneAndUpdate(objectId, {
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
  return res
}

/***********
*
*  DELETA USUÁRIO
*
************/

exports.delUsuario = async (req) => {
  const objectId = mongoose.Types.ObjectId(req.params.id)
  const res = await UsuariosModel.findOneAndRemove(objectId)
  return res
}
