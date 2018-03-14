const md5 = require('md5');

const Criptografa = () => {

    let KEY = 'XJZQ-2CSP-VS5F-OVGW-FAD2-34RP';

    /**
     * -----------------------------------------------------------------------------------
     */

    /**
    * Método: criptografar:
    * Descrição: Criptografa utilizando MD5 Custom
    * @value variável a ser criptografada
    */
    const criptografar = (value) => {

      let criptografado = md5(value + KEY);
      return criptografado;
    };

    /**
    * Método: comparar:
    * Descrição: Verifica se a variável hash é a descriptografia exata do value
    * @value variável criptografada
    */
    const comparar = (value, hash) => {

      let criptografado = md5(value + KEY);
      return criptografado === hash;

    };

    return {
        criptografar: criptografar,
        comparar: comparar
    };

};

module.exports = Criptografia;