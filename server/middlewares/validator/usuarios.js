// Dependências
const validatorHelper = require('../../helpers/validator/validator')()

exports.addUsuario = (req, res, next) => {
  // validação
  validatorHelper.cleanErrors()
  validatorHelper.validate('Nome', req.body.nome, ['isRequired', 'isString', 'isMinLength:3'])
  validatorHelper.validate('Email', req.body.email, ['isRequired', 'isEmail'])
  validatorHelper.validate('Senha', req.body.senha, ['isRequired', 'isMinLength:6'])

  // verifica validação
  if (validatorHelper.detectErrors() === true) {
    res.status(422).json({ erro: validatorHelper.getErrors() })
  } else {
    next()
  }
}

exports.editUsuario = (req, res, next) => {
  // validação
  validatorHelper.cleanErrors()
  validatorHelper.validate('Nome', req.body.nome, ['isRequired', 'isString', 'isMinLength:3'])
  validatorHelper.validate('Email', req.body.email, ['isRequired', 'isEmail'])
  validatorHelper.validate('Senha', req.body.senha, ['isRequired', 'isMinLength:6'])
  validatorHelper.validate('Data de Nascimento', req.body.data_nascimento, ['isDate'])
  // contato
  validatorHelper.validate('Telefone', req.body.contato.telefone, ['isString', 'isMinLength:8'])
  validatorHelper.validate('Celular', req.body.contato.celular, ['isString', 'isMinLength:8'])
  // endereco
  validatorHelper.validate('Rua', req.body.endereco.rua, ['isString'])
  validatorHelper.validate('Número', req.body.endereco.numero, ['isNumeric', 'isGreaterThan:0'])
  validatorHelper.validate('Bairro', req.body.endereco.bairro, ['isString'])
  validatorHelper.validate('Cidade', req.body.endereco.cidade, ['isString'])
  validatorHelper.validate('Estado', req.body.endereco.estado, ['isString', 'isExactLength:2'])
  validatorHelper.validate('Cep', req.body.endereco.cep, ['isString', 'isMinLength:8'])

  // verifica validação
  if (validatorHelper.detectErrors() === true) {
    res.status(422).json({ erro: validatorHelper.getErrors() })
  } else {
    next()
  }
}
