import React, { Component } from 'react'
import Header from '../../components/menu/header'
import ContatoForm from './Form/ContatoForm'
export default class Contato extends Component {
    render() {
        return (
        <div className="container">
            <Header 
                titulo="Contato" 
                subtitulo="Entre em contato conosco"
            />
            <ContatoForm />
        </div>
        )
    }
}