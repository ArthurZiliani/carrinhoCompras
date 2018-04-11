// dependências
const localStorage = require('localStorage')
const CriptografiaHelper = require('../helpers/criptografia')
const UsuariosRepository = require('../repository/usuarios')

/***********
*
*  ENTRAR
*
************/

exports.entrar = async (req, res, next) => {
  /* const username = req.body.username
  const senha = req.body.senha
  const token = localStorage.getItem('token')

  if (token != undefined) {
    res.status(200).json({ msg:'Logado!'})
  } else {
    res.status(200).json({ msg:'Usuário Inexistente' })
  }
  */
  return true
}

/***********
*
*  REGISTRAR
*
************/

exports.registrar = async (req, res, next) => {
  // verifica senhas iguais
  if (req.body.senha !== req.body.senha2) {
    res.status(422).json({ erro: 'As senhas devem ser iguais.' })
    return
  }

  // verifica email repetido
  try {
    const _usuarioFiltrado = await UsuariosRepository.filterUsuarioByEmail(req.body.email)
    if (_usuarioFiltrado !== null) {
      res.status(400).json({ erro: 'Email já registrado.' })
      return
    }
  } catch (e) {
    res.status(400).json({ erro: 'Houve um erro ao acessar o banco de dados.' })
    return
  }

  // criptografa senha
  try {
    const senha = req.body.senha
    await CriptografiaHelper.criptografar(senha)
  } catch (e) {
    res.status(400).json({ erro: 'Houve um erro ao criptografar sua senha.' })
    return
  }

  // insere usuário no banco de dados
  try {
    await UsuariosRepository.addUsuario(req.body)
    res.status(201).json({ message: 'Usuário registrado com sucesso' })
    return
  } catch (e) {
    res.status(400).json({ erro: 'Não foi possível registrar o usuário.' })
  }
}

/***********
*
*  SAIR
*
************/

exports.sair = async (req, res, next) => {
  localStorage.setItem('token', undefined)
  res.status(200).json({ message: 'Deslogado!' })
}
