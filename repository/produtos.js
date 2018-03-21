const mongoose = require('mongoose')
const ProdutosModel = mongoose.model('Produtos')

exports.getAllProdutos = async () => {
    const res = await ProdutosModel.find();
    return res
}

exports.addProduto = async (req) => {
    
    const usuario = new ProdutosModel

    usuario.nome = req.body.nome
    usuario.email = req.body.email
    usuario.senha = req.body.senha
    usuario.data_nascimento = req.body.data_nascimento
    usuario.data_cadastro = req.body.data_cadastro
    usuario.contato = {
        telefone: req.body.telefone,
        celular: req.body.celular
    }
    usuario.endereco = {
        rua: req.body.rua,
        numero: req.body.numero,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        estado: req.body.estado
    }
    //validação
    validator.validate('Nome', usuario.nome, ['isAlfa'], ['isRequired'])
    validator.validate('Email', usuario.email, ['isEmail'], ['isRequired'])
    validator.validate('Senha', usuario.senha, ['isMinLength:6'], ['isRequired'])

    await usuario.save(usuario);
}
