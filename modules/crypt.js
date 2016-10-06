const crypto = require('crypto')
const algorithm = 'aes-256-ctr'
const password = '9f9de37c'

module.exports = {
  encrypt: (buffer) => {
    let cipher = crypto.createCipher(algorithm, password)
    let crypted = Buffer.concat([cipher.update(buffer), cipher.final()])
    return crypted
  },
  decrypt: (buffer) => {
    let decipher = crypto.createDecipher(algorithm, password)
    let dec = Buffer.concat([decipher.update(buffer), decipher.final()])
    return dec
  }
}
