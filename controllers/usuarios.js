// dependências
const UsuariosRepository = require('../repository/usuarios')

/***********
*
*  RECEBE TODOS OS USUARIOS
*
************/

exports.getAllUsuarios = async (req, res, next) => {
  try {
    const _usuarios = await UsuariosRepository.getAllUsuarios()
    res.status(200).json({ usuarios: _usuarios })
  } catch (e) {
    res.status(500).json({ erro: e })
  }
}

/***********
*
*  RECEBE USUARIO POR ID
*
************/

exports.getUsuario = async (req, res, next) => {
  try {
    const _usuario = await UsuariosRepository.getUsuario(req.params.id)
    res.status(200).json({ usuario: _usuario })
  } catch (e) {
    res.status(500).json({ erro: e })
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
  } catch (e) {
    res.status(400).json({ mensagem: 'Não foi possível cadastrar o usuário', erro: e })
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
  } catch (e) {
    res.status(400).json({ mensagem: 'Não foi possível atualizar o usuário', erro: e })
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
  } catch (e) {
    res.status(400).json({ mensagem: 'Não foi possível deletar o usuário', erro: e })
  }
}
