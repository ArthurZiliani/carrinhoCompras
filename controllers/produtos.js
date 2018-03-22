// dependências
const mongoose = require('mongoose')
const ProdutosRepository = require('../repository/produtos')
const ProductModel = mongoose.model('Produtos')
const validator = require('../helpers/validator/validator')()

/***********
*
*  RECEBE TODOS OS PRODUTOS
*
************/

exports.getAllProdutos = async (req, res, next) => {
  try {
    const data = await ProdutosRepository.getAllProdutos()
    res.status(200).json({ produtos: data })
  } catch (error) {
    res.status(500).json({ error })
  }
}

/***********
*
*  RECEBE PRODUTO POR ID
*
************/

exports.getProduto = async (req, res, next) => {
  try {
    const data = await ProdutosRepository.getProduto(req)
    res.status(200).json({ produto: data })
  } catch (error) {
    res.status(500).json({ error })
  }
}

/***********
*
*  ADICIONA PRODUTO
*
************/

exports.addProduto = async (req, res, next) => {
  
  try {
   await ProdutosRepository.addProduto(req.body)
    res.status(201).json({
      message: 'Tudo certo'
    })
  } catch (error) {
    res.status(400).json({
      error: error
    })
  }
}

/***********
*
*  EDITA PRODUTO
*
************/

exports.editProduto = async (req, res, next) => {
  try {
    await ProdutosRepository.editProduto(req.params.id, req.body) 
    res.status(200).json({ mensagem: 'Produto atualizado com sucesso!' })
  } catch (error) {
    res.status(400).json({ mensagem: 'Não foi possível atualizar o produto', error })
  }
}

/***********
*
*  DELETA PRODUTO
*
************/

exports.delProduto = async (req, res, next) => {
  try {
    await ProdutosRepository.delProduto(req.body.id)
    res.status(200).json({ mensagem: 'Produto deletado com sucesso!' })
  } catch (error) {
    res.status(400).json({ mensagem: 'Não foi possível deletar o produto', data: error })
  }
}
