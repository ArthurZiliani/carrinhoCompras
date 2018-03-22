// dependências
const ProdutosRepository = require('../repository/produtos')

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
        const data = await ProdutosRepository.addProduto(req)
        res.status(201).json({ mensagem: 'Produto cadastrado com sucesso!' })

    } catch (error) {
        res.status(400).json({ mensagem: 'Não foi possível cadastrar o produto', data: error })
    }

}

/***********
*
*  EDITA PRODUTO
*
************/

exports.editProduto = async (req, res, next) => {

    try {
        const data = await ProdutosRepository.editProduto(req)
        res.status(200).json({ mensagem: 'Produto atualizado com sucesso!' })

    } catch (error) {
        res.status(400).json({ mensagem: 'Não foi possível atualizar o produto', data: error })
    }

}

/***********
*
*  DELETA PRODUTO
*
************/

exports.delProduto = async (req, res, next) => {

    try {
        const data = await ProdutosRepository.delProduto(req)
        res.status(200).json({ mensagem: 'Produto deletado com sucesso!' })

    } catch (error) {
        res.status(400).json({ mensagem: 'Não foi possível deletar o produto', data: error })
    }

}
