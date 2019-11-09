import { combineReducers } from 'redux'
import contatoReducer from './contatoReducer'
import cursoReducer from './cursosReducer.js'

const reducers  = combineReducers({
    contato: contatoReducer,
    curso: cursoReducer
})

export default reducers