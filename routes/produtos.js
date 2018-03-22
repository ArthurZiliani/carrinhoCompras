const express = require('express')
const router = express.Router()
const controller = require('../controllers/produtos')

router.get('/', controller.getAllProdutos)
router.get('/:id', controller.getProduto)
router.post('/', controller.addProduto)
router.put('/:id', controller.editProduto)
router.delete('/:id', controller.delProduto)

module.exports = router
