// dependências
const bcrypt = require('bcrypt')

/**
  * Método: criptografar:
  * Descrição: Criptografa utilizando BCrypt
  * @value variável a ser criptografada
  */
exports.criptografar = async (value) => {
  return bcrypt.hashSync(value, 10)
}

/**
  * Método: comparar:
  * Descrição: Verifica se a variável hash é a descriptografia exata do value
  * @value variável sem criptografia
  * @hash variável criptografada
  */
exports.comparar = async (value, hash) => {
  return bcrypt.compareSync(value, hash)
}
