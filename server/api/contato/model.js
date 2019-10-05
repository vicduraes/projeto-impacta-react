//criando o schema
const restful = require('node-restful')

//referência ao mongoose do restful
const mongoose = restful.mongoose 

//definindo o schema curso
const contatoSchema = new mongoose.Schema({
 data: { type: Date },
 nome: { type: String, required: true },
 email: { type: String, required: true },
 assunto: { type: String, required: true },
})

module.exports = restful.model('contato', contatoSchema)