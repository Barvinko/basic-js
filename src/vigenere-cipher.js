const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isReverse = true){
    this.noReverse = isReverse;
  }

  encrypt(message, key) {
    return this.crypt(message, key, 1)
  }
  decrypt(message, key) {
    return this.crypt(message, key, -1)
  }

  crypt(message, key, chooseCrypt){
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase().split('');
    let indexKey = 0;
    const messageCrypt = message.replace(/[A-Z]/g, symbol => {
      const charCode = symbol.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
        const encryptedCharCode = (charCode + chooseCrypt * key[indexKey].charCodeAt(0) % 26 + 26) % 26 + 65;
        indexKey = indexKey === key.length - 1 ? 0 : indexKey + 1;
        return String.fromCharCode(encryptedCharCode);
      } else {
        return symbol;
      }
    });
    return this.noReverse ? messageCrypt : messageCrypt.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
