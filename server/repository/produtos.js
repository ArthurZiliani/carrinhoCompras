const mongoose = require('mongoose')
const ProdutosModel = mongoose.model('Produtos')

/***********
*
*  RECEBE TODOS OS PRODUTOS
*
************/

exports.getAllProdutos = async () => {
  return ProdutosModel.find()
}

/***********
*
*  RECEBE PRODUTO POR ID
*
************/

exports.getProduto = async (id) => {
  return ProdutosModel.find({_id: id})
}

/***********
*
*  ADICIONA PRODUTO
*
************/

exports.addProduto = async (data) => {
  const produto = new ProdutosModel(data)
  return produto.save()
}

/***********
*
*  EDITA PRODUTO
*
************/

exports.editProduto = async (id, data) => {
  return ProdutosModel.findOneAndUpdate(id, {
    $set: {
      nome: data.nome,
      email: data.email,
      quantidade: data.quantidade,
      valor: data.valor,
      tags: data.tags
    }
  })
}

/***********
*
*  DELETA PRODUTO
*
************/

exports.delProduto = async (id) => {
  return ProdutosModel.findOneAndRemove({_id: id})
}
