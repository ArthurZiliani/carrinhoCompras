// dependências
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// collection
const schema = new Schema({

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
  carrinho: {
    type: Array
  },
  data_nascimento: {
    type: Date
  },
  data_cadastro: {
    type: Date,
    default: Date.now
  },
  contato: {
    type: Array
  },
  endereco: {
    type: String,
    required: true
  }

})

module.exports = mongoose.model('Usuarios', schema)
