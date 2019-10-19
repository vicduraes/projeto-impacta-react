import React, { Component } from 'react'
import Header from '../../components/menu/header'
import Cadastro from './cadastro/Cadastro'

export default class Curso extends Component {
    render() {
        return (
        <div className="container">
            <Header 
                titulo="Cursos" 
                subtitulo="Encontre aqui o curso perfeito para você!"
            />
            <Cadastro />
        </div>
        )
    }
}