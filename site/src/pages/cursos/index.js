import React, { Component } from 'react'
import Header from '../../components/menu/header'

export default class Curso extends Component {
    render() {
        return (
        <div className="container">
            <Header 
                titulo="Cursos" 
                subtitulo="Encontre o curso perfeito para você!"
            />
        </div>
        )
    }
}