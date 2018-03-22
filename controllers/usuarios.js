// dependências
const UsuariosRepository = require('../repository/usuarios')

/***********
*
*  RECEBE TODOS OS USUARIOS
*
************/

exports.getAllUsuarios = async (req, res, next) => {
  try {
    const data = await UsuariosRepository.getAllUsuarios()
    res.status(200).json({ usuario: data })
  } catch (error) {
    res.status(500).json({ error })
  }
}

/***********
*
*  RECEBE USUARIO POR ID
*
************/

exports.getUsuario = async (req, res, next) => {
  try {
    const data = await UsuariosRepository.getUsuario(req.params.id)
    res.status(200).json({ usuario: data })
  } catch (error) {
    res.status(500).json({ error })
  }
}

/***********
*
*  ADICIONA USUARIO
*
************/

exports.addUsuario = async (req, res, next) => {
  try {
    await UsuariosRepository.addUsuario(req.body)
    res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' })
  } catch (error) {
    res.status(400).json({ mensagem: 'Não foi possível cadastrar o usuário', data: error })
  }
}

/***********
*
*  EDITA USUARIO
*
************/

exports.editUsuario = async (req, res, next) => {
  try {
    await UsuariosRepository.editUsuario(req.params.id, req.body)
    res.status(200).json({ mensagem: 'Usuário atualizado com sucesso!' })
  } catch (error) {
    res.status(400).json({ mensagem: 'Não foi possível atualizar o usuário', data: error })
  }
}

/***********
*
*  DELETA USUARIO
*
************/

exports.delUsuario = async (req, res, next) => {
  try {
    await UsuariosRepository.delUsuario(req.params.id)
    res.status(200).json({ mensagem: 'Usuário deletado com sucesso!' })
  } catch (error) {
    res.status(400).json({ mensagem: 'Não foi possível deletar o usuário', data: error })
  }
}
