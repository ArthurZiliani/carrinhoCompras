const express = require('express')
const router = express.Router()
const controller = require('../controllers/usuarios')
// middlewares
const validator = require('../middlewares/validator/usuarios')

router.get('/', controller.getAllUsuarios)
router.get('/:id', controller.getUsuario)
router.post('/', validator.addUsuario, controller.addUsuario)
router.put('/:id', validator.editUsuario, controller.editUsuario)
router.delete('/:id', controller.delUsuario)

module.exports = router
