import React, { Component } from 'react'
import CursoForm from '../form/Form'
import CursoList from '../list/List'

export default class Cadastro extends Component {
    render() {
        return(
            <div className="row border-bottom">
                <div className="col-md-6">
                    <CursoForm />
                </div>
                <div className="col-md-6">
                    <CursoList />
                </div>
            </div>
        )
    }
}