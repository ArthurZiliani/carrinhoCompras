const express = require('express')
const router = express.Router()
const controller = require('../controllers/carrinho.js')

router.get('/', controller.getCarrinho)

module.exports = router
