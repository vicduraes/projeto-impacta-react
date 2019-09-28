const bodyParser = require('body-parser')
const express = require('express')
const allowCors = require('./cors')

const port = 3200
const server = express() //novo servidor

//para toda requisição que chegar, use o bodyparser para
//interpretar chegadas no formato urlencoded
server.use(bodyParser.urlencoded({ extended: true }))

//considera o formato json no corpo da requisição
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function () {
 //template string (observe a crase)
 console.log(`Servidor rodando na porta ${port}...`)
})

module.exports = server