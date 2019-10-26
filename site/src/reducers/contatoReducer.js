const INITIAL_STATE = {
    data: '2019-09-03',
    nome: 'Victoria Durães',
    email: 'vic@email.com',
    assunto: 'Gostaria de mais informações sobre os cursos'
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ATUALIZA_DATA': return {...state, data: action.info}
        default: return state
    }
}