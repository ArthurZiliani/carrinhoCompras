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

  const res = await ProdutosModel.find({ _id: objectId })
  return res
}

/***********
*
*  ADICIONA PRODUTO
*
************/

exports.addProduto = async (data) => {

  /*// variáveis
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
  validator.validate('Tag', produto.tags, ['isObject'])*/

  let produto = new ProdutosModel(data)
  return await produto.save()
}

/***********
*
*  EDITA PRODUTO
*
************/

exports.editProduto = async (id, data) => {

  // validação
  validator.validate('Nome', data.nome, ['isRequired', 'isString', 'isMinLenght:3'])
  validator.validate('Categoria', data.categoria, ['isRequired', 'isString'])
  validator.validate('Quantidade', data.quantidade, ['isRequired', 'isNumeric', 'isGreatherThan:0'])
  validator.validate('Valor', data.valor, ['isRequired', 'isNumeric', 'isGreatherThan:0'])
  validator.validate('Tag', data.tags, ['isObject'])

  // edição
  const res = await ProdutosModel.findOneAndUpdate(id, {
    $set: {
      nome: data.nome,
      email: data.email,
      quantidade: data.quantidade,
      valor: data.valor,
      tags: data.tags
    }
  })
  return res
}

/***********
*
*  DELETA PRODUTO
*
************/

exports.delProduto = async (id) => {
  const res = await ProdutosModel.findOneAndRemove({_id: id})
  return res
}
