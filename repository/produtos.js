const mongoose = require('mongoose');
const ProdutosModel = mongoose.model('Produtos');


exports.getAll = async () => {
   const res =  await ProdutosModel.find();
   return res;
}