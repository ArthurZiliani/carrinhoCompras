const express = require('express')
const router = express.Router()
const controller = require('../controllers/autenticacao')
// middlewares
const validator = require('../middlewares/validator/usuarios')

router.post('/entrar/', controller.entrar)
router.post('/registrar/', validator.addUsuario, controller.registrar)
router.get('/sair/', controller.sair)

module.exports = router
