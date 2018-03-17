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
    unique: true
  },
  senha: {
    type: Number,
    required: true
  },
  carrinho: {
    type: Array
  }

})

module.exports = mongoose.model('Usuarios', schema)
