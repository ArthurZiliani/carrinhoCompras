// dependências
const mongoose = require('mongoose')
const UsuariosModel = mongoose.model('Usuarios');



exports.getCarrinho = (req, res, next) => {
  // recepção
  UsuariosModel.find()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(e => {
      res.status(400).send(e)
    })
}
