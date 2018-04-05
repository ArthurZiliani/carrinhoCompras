const express = require('express')
const router = express.Router()
const controller = require('../controllers/autenticacao')

router.post('/entrar/', controller.entrar)
router.post('/registrar/', controller.registrar)
router.get('/sair/', controller.sair)

module.exports = router