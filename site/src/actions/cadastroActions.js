export const alteraCodigo = event => {
    return {
        type: 'ATUALIZA_CODIGO',
        value: event.target.value
    }
}