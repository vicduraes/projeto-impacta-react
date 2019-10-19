import React, { Component } from 'react'
import axios from 'axios'
import CursoForm from '../form/Form'
import CursoList from '../list/List'

const URL = "http://localhost:3200/api/curso"

export default class Cadastro extends Component {
   
    state = { 
        data: [] 
    }

    componentWillMount() {
        this.listar()
    }

    listar() {
        axios.get(URL).then(response => this.listarCb(response.data))
    }

    listarCb(data) {
        this.setState({...this.state, data})
    }

    render() {
        return(
            <div className="row border-bottom">
                <div className="col-md-6">
                    <CursoForm />
                </div>
                <div className="col-md-6">
                    <CursoList listaCursos={this.state.data} />
                </div>
            </div>

        )
    }
}