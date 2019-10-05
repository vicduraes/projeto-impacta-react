//tudo o que é necessário para configurar a API está aqui

require('./config/db')
const server = require('./config/server')
const routes = require('./config/routes')

routes(server)