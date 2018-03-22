const mongoose = require('mongoose')
const ProdutosModel = mongoose.model('Produtos')
const validator = require('../helpers/validator/validator')()

/***********
*
*  RECEBE TODOS OS PRODUTOS
*
************/

exports.getAllProdutos = async () => {
  const res = await ProdutosModel.find()
  return res
}

/***********
*
*  RECEBE PRODUTO POR ID
*
************/

exports.getProduto = async (req) => {
  const objectId = mongoose.Types.ObjectId(req.params.id)

  const res = await ProdutosModel.find({_id: objectId})
  return res
}

/***********
*
*  ADICIONA PRODUTO
*
************/

exports.addProduto = async (req) => {
  const produto = new ProdutosModel()

  // variáveis
  produto.nome = req.body.nome
  produto.categoria = req.body.categoria
  produto.quantidade = req.body.quantidade
  produto.valor = req.body.valor
  produto.tags = req.body.tags

  // validação
  validator.validate('Nome', produto.nome, ['isRequired', 'isString', 'isMinLenght:3'])
  validator.validate('Categoria', produto.categoria, ['isRequired', 'isString'])
  validator.validate('Quantidade', produto.quantidade, ['isRequired', 'isNumeric', 'isGreatherThan:0'])
  validator.validate('Valor', produto.valor, ['isRequired', 'isNumeric', 'isGreatherThan:0'])
  validator.validate('Tag', produto.tags, ['isObject'])

  const res = await ProdutosModel.save(produto)
  return res
}

/***********
*
*  EDITA PRODUTO
*
************/

exports.editProduto = async (req) => {
  const produto = new ProdutosModel()
  const objectId = mongoose.Types.ObjectId(req.params.id)

  // variáveis
  produto.nome = req.body.nome
  produto.categoria = req.body.categoria
  produto.quantidade = req.body.quantidade
  produto.valor = req.body.valor
  produto.tags = req.body.tags

  // validação
  validator.validate('Nome', produto.nome, ['isRequired', 'isString', 'isMinLenght:3'])
  validator.validate('Categoria', produto.categoria, ['isRequired', 'isString'])
  validator.validate('Quantidade', produto.quantidade, ['isRequired', 'isNumeric', 'isGreatherThan:0'])
  validator.validate('Valor', produto.valor, ['isRequired', 'isNumeric', 'isGreatherThan:0'])
  validator.validate('Tag', produto.tags, ['isObject'])

  // edição
  const res = await ProdutosModel.findOneAndUpdate(objectId, {
    $set: {
      nome: produto.nome,
      email: produto.email,
      quantidade: produto.quantidade,
      valor: produto.valor,
      tags: produto.tags
    }
  })
  return res
}

/***********
*
*  DELETA PRODUTO
*
************/

exports.delProduto = async (req) => {
  const objectId = mongoose.Types.ObjectId(req.params.id)
  const res = await ProdutosModel.findOneAndRemove(objectId)
  return res
}
