const express = require('express')
const router = express.Router()
const controller = require('../controllers/usuarios.js')

router.get('/', controller.getAllUsuarios)
router.post('/', controller.addUsuario)

module.exports = router
