// dependências
const mongoose = require('mongoose')
const UsuariosModel = mongoose.model('Usuarios')
// repositorios
const repositorios = require('../repository/usuarios')

/*
exports.addUsuario = async (req, res, next) => {

  try {
    const data = await repositorios.addUsuario()
    res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' })

  } catch (error) {
    res.status(400).json({
      mensagem: 'Não foi possível cadastrar o usuário',
      data: e
    })
  }

}
*/
