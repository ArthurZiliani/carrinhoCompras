// dependências
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({

  numero: {
    type: String,
    unique: true,
    require: true
  },
  data_registro: {
    type: Date,
    require: true,
    default: Date.now
  },
  status: {
    type: String,
    require: true,
    enum: ['Pendente', 'Pago', 'Enviado', 'Concluido', 'Cancelado', 'Devolvido'],
    default: 'Pendente'
  },
  comprador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuarios'
  },
  itens: [{
    quantidade: {
      type: Number,
      require: true,
      default: 1
    },
    preco: {
      type: Number,
      require: true
    },
    produto: {
      type: mongoose.Schema.Types.ObjectId,
      require: 'Produtos'
    }
  }],
  total: {
    type: Number,
    require: true,
    default: 0
  }
})

module.exports = mongoose.model('Pedidos', schema)
