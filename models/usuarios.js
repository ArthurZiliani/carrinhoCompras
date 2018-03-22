// dependências
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// collection
const schema = new Schema({

  // principal
  nome: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    index: true,
    unique: [true, 'Email já cadastrado']
  },
  senha: {
    type: String,
    required: true
  },
  // datas
  data_nascimento: {
    type: Date
  },
  data_cadastro: {
    type: Date,
    default: Date.now
  },
  // contato
  contato: [{
    telefone: {
      type: String
    },
    celular: {
      type: String
    }
  }],
  // endereço
  endereco: [{
    rua: {
      type: String
    },
    numero: {
      type: Number
    },
    bairro: {
      type: String
    },
    cidade: {
      type: String
    },
    estado: {
      type: String
    },
    cep: {
      type: String
    }
  }],
  // adicionais
  carrinho: {
    type: Array
  }

})

module.exports = mongoose.model('Usuarios', schema)
