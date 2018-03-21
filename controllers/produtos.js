// dependências
const mongoose = require('mongoose');
const ProdutosModel = mongoose.model('Produtos');
//repositorios
const repositorios = require('../repository/produtos');

//* *************************
//                         *
//  RECEBE USUÁRIO POR ID  *
//                         *
//* *************************

exports.getAllProdutos = async (req, res, next) => {
  // recepção
  
  try {
    const data = await repositorios.getAll();
    res.status(200).json({ message: 'Okkk', produtos: data })
  } catch (error) {
    res.status(500).json({ error })
  }
}

//* *************************
//                         *
//  RECEBE USUÁRIO POR ID  *
//                         *
//* *************************
/*
exports.getUsuario = (req, res, next) => {
  let objectId = mongoose.Types.ObjectId(req.params.id)

  // recepção
  UsuariosModel.findOne({_id: objectId})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(e => {
      res.status(400).send(e)
    })
}
*/
//* ******************
//                  *
//  INSERE USUÁRIO  *
//                  *
//* ******************
/*
exports.addUsuario = (req, res, next) => {
  let usuario = new UsuariosModel()

  // variáveis
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

  // inserção
  usuario.save()
    .then(data => {
      res.status(201).send({
        mensagem: 'Usuário cadastrado com sucesso!'
      })
    })
    .catch(e => {
      res.status(400).send({
        mensagem: 'Não foi possível cadastrar o usuário',
        data: e
      })
    })
}
*/
//* ********************
//                    *
//  ATUALIZA USUÁRIO  *
//                    *
//* ********************
/*
exports.editUsuario = (req, res, next) => {
  // atualização
  UsuariosModel.findOneAndUpdate(req.params.id, {
    $set: {
      // variáveis
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
      data_nascimento: req.body.data_nascimento,
      data_cadastro: req.body.data_cadastro,
      contato: {
        telefone: req.body.telefone,
        celular: req.body.celular
      },
      endereco: {
        rua: req.body.rua,
        numero: req.body.numero,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        estado: req.body.estado
      }
    }
  })
    .then(data => {
      res.status(200).send({
        mensagem: 'Usuário atualizado com sucesso!'
      })
    })
    .catch(e => {
      res.status(400).send({
        mensagem: 'Não foi possível atualizar o usuário',
        data: e
      })
    })
}
*/
//* ******************
//                  *
//  DELETA USUÁRIO  *
//                  *
//* ******************
/*
exports.delUsuario = (req, res, next) => {
  // deleção
  UsuariosModel.findOneAndRemove(req.params.id)
    .then(data => {
      res.status(200).send({
        mensagem: 'Usuário deletado com sucesso!'
      })
    })
    .catch(e => {
      res.status(400).send({
        mensagem: 'Não foi possível deletar o usuário',
        data: e
      })
    })
}
*/
