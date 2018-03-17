// dependências
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// collection
const schema = new Schema({

  nome: {
    type: String,
    required: true,
    trim: true,
    index: true,
    unique: true
  },
  categoria: {
    type: String,
    required: true,
    trim: true
  },
  quantidade: {
    type: Number,
    required: true
  },
  valor: {
    type: Number,
    required: true
  }

})

module.exports = mongoose.model('Produtos', schema)
