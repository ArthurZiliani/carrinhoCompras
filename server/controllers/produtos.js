// dependências
const ProdutosRepository = require('../repository/produtos')

/***********
*
*  RECEBE TODOS OS PRODUTOS
*
************/

exports.getAllProdutos = async (req, res, next) => {
  try {
    const _produtos = await ProdutosRepository.getAllProdutos()
    res.status(200).json({ produtos: _produtos })
  } catch (e) {
    res.status(500).json({ erro: e })
  }
}

/***********
*
*  RECEBE PRODUTO POR ID
*
************/

exports.getProduto = async (req, res, next) => {
  try {
    const _produto = await ProdutosRepository.getProduto(req.params.id)
    res.status(200).json({ produto: _produto })
  } catch (e) {
    res.status(500).json({ erro: e })
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
    res.status(201).json({ mensagem: 'Produto cadastrado com sucesso!' })
  } catch (e) {
    res.status(400).json({ mensagem: 'Não foi possível cadastrar o produto', erro: e })
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
  } catch (e) {
    res.status(400).json({ mensagem: 'Não foi possível atualizar o produto', erro: e })
  }
}

/***********
*
*  DELETA PRODUTO
*
************/

exports.delProduto = async (req, res, next) => {
  try {
    await ProdutosRepository.delProduto(req.params.id)
    res.status(200).json({ mensagem: 'Produto deletado com sucesso!' })
  } catch (e) {
    res.status(400).json({ mensagem: 'Não foi possível deletar o produto', erro: e })
  }
}
