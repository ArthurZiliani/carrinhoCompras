const express = require('express')
const router = express.Router()
const controller = require('../controllers/produtos.js')

router.get('/', controller.getAllProdutos)

module.exports = router
