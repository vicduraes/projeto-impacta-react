//serviços rest
const Contato = require('./model')
Contato.methods(['get', 'post', 'delete'])
Contato.updateOptions({ new: true, runValidators: true })
module.exports = Contato