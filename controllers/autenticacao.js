// dependências
const localStorage = require('localStorage')

/***********
*
*  ENTRAR
*
************/

exports.entrar = async (req, res, next) => {
  const username = req.body.username
  const senha = req.body.senha
  const token = localStorage.getItem('token')

  if (token != undefined) {
    res.status(200).json({ msg:'Logado!'})
  } else {
    res.status(200).json({ msg:'Usuário Inexistente' })
  }
}

/***********
*
*  REGISTRAR
*
************/

exports.registrar = async (req, res, next) => {
  const username = req.body.username
  const senha = req.body.senha

  localStorage.setItem('token', 'sjdaskdjkalsjdkajsldasd')
  res.status(200).json({ msg:'Usuário Registrado: ' + username + ':' + senha })
}

/***********
*
*  SAIR
*
************/

exports.sair = async (req, res, next) => {

  localStorage.setItem('token', undefined)
  res.status(200).json({ msg:'Deslogado!' })
}
