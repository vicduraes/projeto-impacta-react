import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {alteraCodigo} from '../../../actions/cadastroActions'

class Formulario extends Component {

    render() {
        return (
            <div className="border-right pl-3 pr-3">
                <h3 className="border-bottom">Formulário</h3>
                <form>
                    <div className="form-group row">
                        <label htmlFor="codigo" className="col-sm-3 col-form-label">
                            Código:
                        </label>
                        <div className="col-sm-5 col-6">
                            <input type="number"
                                className="form-control" 
                                id="codigo"
                                value={this.props.codigo}
                                onChange={(e) => {this.props.alteraCampos(e.target)}}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="descrição" className="col-sm-3 col-form-label">
                            Descrição:
                        </label>
                        <div className="col-sm-9">
                            <input type="text"
                                className="form-control" 
                                id="descricao" 
                                value={this.props.descricao}
                                onChange={(e) => {this.props.alteraCampos(e.target)}}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="cargaHoraria" className="col-sm-3 col-form-label">
                            Carga Horária:
                        </label>
                        <div className="col-sm-5 col-6">
                            <input type="number"
                                className="form-control" 
                                id="cargaHoraria" 
                                value={this.props.cargaHoraria}
                                onChange={(e) => {this.props.alteraCampos(e.target)}}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="preco" className="col-sm-3 col-form-label">
                            Preço:
                        </label>
                        <div className="col-sm-5 col-6">
                            <input type="text"
                                className="form-control" 
                                id="preco"
                                value={this.props.preco}
                                onChange={(e) => {this.props.alteraCampos(e.target)}}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="categoria" className="col-sm-3 col-form-label">
                            Categoria:
                        </label>
                        <div className="col-sm-6 col-6">
                            <select className="form-control" id="categoria" value={this.props.categoria} onChange={(e) => {this.props.alteraCampos(e.target)}}>
                                <option>INFORMATICA</option>
                                <option>ENGENHARIA</option>
                                <option>ADMINISTRACAO</option>
                                <option>REDES</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <button onClick={this.props.adicionarCurso} className="btn btn-primary ml-3 mb-3 mr-3">
                            {this.props.botao}
                        </button>
                        <button onClick={this.props.limparForm} className="btn btn-primary ml-3 mb-3">
                            Limpar
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    codigo: state.curso.codigo,
    descricao: state.curso.descricao,
    cargaHoraria: state.curso.cargaHoraria,
    preco: state.curso.preco,
    categoria: state.curso.categoria,
    botaoInicial: state.curso.botaoInicial
})

const mapDispatchToProps = dispatch => bindActionCreators({
    alteraCodigo}, dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Formulario)