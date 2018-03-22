const mongoose = require('mongoose')
const UsuariosModel = mongoose.model('Usuarios')
const validator = require('../helpers/validator/validator')()

/*
exports.addUsuario = async () => {

    const usuario = new UsuariosModel

    usuario.nome = ''
    usuario.email = ''
    usuario.senha = ''

    //validação
    validator.validate('Nome', usuario.nome, ['isAlfa'], ['isRequired'])
    validator.validate('Email', usuario.email, ['isEmail'], ['isRequired'])
    validator.validate('Senha', usuario.senha, ['isMinLength:6'], ['isRequired'])

    await usuario.save(usuario);
}
*/