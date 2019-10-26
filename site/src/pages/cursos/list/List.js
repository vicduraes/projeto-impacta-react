import React, { Component } from 'react'
import './List.css'

export default class List extends Component {

    exibirLinhas = () => {
        const cursos = this.props.listaCursos || []
        return cursos.map(curso => (
        <tr key={curso._id}>
            <td>{curso.codigo}</td>
            <td>{curso.descricao}</td>
            <td >
                <button className="button-list btn btn-success btn-sm"
                    onClick={() => this.props.consultarCurso(curso)}>
                    <i className="fa fa-check"></i>
                </button>
                <button className="btn btn-danger btn-sm"
                    onClick={() => this.props.removerCurso(curso)}>
                    <i className="fa fa-trash-o"></i>
                </button>
            </td>
        </tr>
        ))
    }

    render() {
        return (

            <div>
                <h3>Lista de Cursos</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exibirLinhas()}
                    </tbody>
                </table>
            </div>
        )
    }
}