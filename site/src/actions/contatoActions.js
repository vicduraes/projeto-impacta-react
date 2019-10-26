import axios from 'axios'

const URL = 'http://localhost:3200/api/contato'

export const alteraData = event => {
    return {
        type: 'ATUALIZA_DATA',
        info: event.target.value
    }
}

export const alteraNome = event => {
    return {
        type: 'ATUALIZA_NOME',
        info: event.target.value
    }
}

export const alteraEmail = event => {
    return {
        type: 'ATUALIZA_EMAIL',
        info: event.target.value
    }
}

export const alteraAssunto = event => {
    return {
        type: 'ATUALIZA_ASSUNTO',
        info: event.target.value
    }
}

export const addContato = (data, nome, email, assunto) => {
    axios.post(URL, {data, nome, email, assunto})
    return {
        type: 'LIMPAR_FORM'
    }
}