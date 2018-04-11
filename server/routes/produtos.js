const express = require('express')
const router = express.Router()
const controller = require('../controllers/produtos')
// middlewares
const validator = require('../middlewares/validator/produtos')

router.get('/', controller.getAllProdutos)
router.get('/:id', controller.getProduto)
router.post('/', validator.addProduto, controller.addProduto)
router.put('/:id', validator.editProduto, controller.editProduto)
router.delete('/:id', controller.delProduto)

module.exports = router
