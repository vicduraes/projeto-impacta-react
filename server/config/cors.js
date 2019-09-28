module.exports = (_, response, next) => {
    //com "*" nós liberamos o acesso da API de qualquer http
    response.header("Access-Control-Allow-Origin", "*")

    //aqui setamos que aceitamos apenas esses quatro métodos - outros serão rejeitados
    response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")

    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    
    //necessário para dar continuidade ao processo de requisição
    next()
}