import React, { Component } from 'react'
import Header from '../../components/menu/header'

export default class Contato extends Component {
    render() {
        return (
        <div className="container">
            <Header 
                titulo="Contato" 
                subtitulo="Entre em contato conosco"
            />
        </div>
        )
    }
}