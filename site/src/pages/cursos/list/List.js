import React, { Component } from 'react'

export default class List extends Component {

    exibirLinhas = () => {
        const cursos = this.props.listaCursos || []
        return cursos.map(curso => (
        <tr key={curso._id}>
            <td>{curso.codigo}</td>
            <td>{curso.descricao}</td>
        </tr>
        ))
    }

    render() {
        console.log(this.props.lista)
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