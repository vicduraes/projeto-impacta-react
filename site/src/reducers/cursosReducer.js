const INITIAL_STATE = {
    codigo: 666,
    descricao: 'Teste pra ver se você consegue fazer sozinha',
    cargaHoraria: 10,
    preco: 10,
    categoria: 'REDES',
    botaoInicial: 'Adicionar',
    lista: [{_id: '-1', codigo: 13, descricao: 'Vai dar PT'}]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ATUALIZA_CODIGO': return {...state, data: action.value}
        case 'ATUALIZA_DESCRICAO': return {...state, nome: action.value}
        case 'ATUALIZA_CARGA': return {...state, email: action.value}
        case 'ATUALIZA_PRECO': return {...state, assunto: action.value}
        case 'GET_LISTA': return {...state, lista: action.value}
        case 'LIMPAR_CaTEGORIA': return INITIAL_STATE
        default: return state
    }
}