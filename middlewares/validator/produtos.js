// Dependências
const validatorHelper = require('../../helpers/validator/validator')()

exports.addProduto = (req, res, next) => {
  // validação
  validatorHelper.validate('Nome', req.body.nome, ['isRequired', 'isString', 'isMinLength:3'])
  validatorHelper.validate('Categoria', req.body.categoria, ['isRequired', 'isString'])
  validatorHelper.validate('Quantidade', req.body.quantidade, ['isRequired', 'isNumeric', 'isGreaterThan:0'])
  validatorHelper.validate('Valor', req.body.valor, ['isRequired', 'isNumeric', 'isGreaterThan:0'])
  validatorHelper.validate('Tag', req.body.tags, ['isObject'])

  // verifica validação
  if (validatorHelper.detectErrors() === true) {
    res.status(422).json({ erro: validatorHelper.getErrors() })
  } else {
    next()
  }
}

exports.editProduto = (req, res, next) => {
  // validação
  validatorHelper.validate('Nome', req.body.nome, ['isRequired', 'isString', 'isMinLength:3'])
  validatorHelper.validate('Categoria', req.body.categoria, ['isRequired', 'isString'])
  validatorHelper.validate('Quantidade', req.body.quantidade, ['isRequired', 'isNumeric', 'isGreaterThan:0'])
  validatorHelper.validate('Valor', req.body.valor, ['isRequired', 'isNumeric', 'isGreaterThan:0'])
  validatorHelper.validate('Tag', req.body.tags, ['isObject'])

  // verifica validação
  if (validatorHelper.detectErrors() === true) {
    res.status(422).json({ erro: validatorHelper.getErrors() })
  } else {
    next()
  }
}
