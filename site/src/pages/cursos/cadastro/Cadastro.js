import React, { Component } from 'react'
import axios from 'axios'
import CursoForm from '../form/Form'
import CursoList from '../list/List'

const URL = "http://localhost:3200/api/curso"

export default class Cadastro extends Component {
 
    initialState = {
        data: [],
        codigo: 0,
        descricao: '',
        cargaHoraria: 0,
        preco: 0.0,
        categoria: 'REDES'
      }
    
      constructor (props) {
        super(props)
        this.state = this.initialState
      }

    componentWillMount() {
        this.listar()
    }

    listar() {
        axios.get(URL).then(response => this.setState({ ...this.state, data: response.data }))
    }

    adicionarCurso(e) {
        console.log('inicio adicionarCurso')
        e.preventDefault();
        const codigo = this.state.codigo;
        const descricao = this.state.descricao;
        const cargaHoraria = this.state.cargaHoraria;
        const preco = this.state.preco;
        const categoria = this.state.categoria;

        const body = { codigo, descricao, cargaHoraria, preco, categoria }

        console.log(body)
        axios.post(URL, body)
            .then(_ => {
                alert("Curso adicionado");
                this.listar();
                this.setState({codigo: 0,
                    descricao: '',
                    cargaHoraria: 0,
                    preco: 0.0,
                    categoria: 'REDES'})
        }).catch(error => {
            const cargaHoraria =  error.response.data.errors.cargaHoraria
            const codigo =  error.response.data.errors.codigo
            const preco =  error.response.data.errors.preco
            const descricao =  error.response.data.errors.descricao
            const categoria =  error.response.data.errors.categoria

            var texto = ''

            if(cargaHoraria){
                texto += 'Carga horária Inválida\n'
            }

            if(codigo){
                texto += 'Código Inválido\n'
            }

            if(preco){
                texto += 'Preço Inválido\n'
            }
            if(descricao){
                texto += 'Descrição Inválida\n'
            }
            if(categoria){
                texto += 'Categoria Inválida\n'
            }
            alert(texto)
        });
    }

    removerCurso = function(curso) {
        if(window.confirm('Você deseha remover o curso selecionado?')) {
            axios.delete(`${URL}/${curso._id}`).then(response => {
                alert(` Curso ${curso.descricao} foi removido com sucesso!`)
                this.listar();
            }).catch(error => {
                console.log(error)
            })
        }
    }

    alteraCampos = function (target) {
        switch (target.id) {
            case 'codigo':
                this.setState({ codigo: target.value })
                break
            case 'descricao':
                this.setState({ descricao: target.value })
                break
            case 'cargaHoraria':
                this.setState({ cargaHoraria: target.value })
                break
            case 'preco':
                this.setState({ preco: target.value })
                break
            case 'categoria':
                this.setState({ categoria: target.value })
                break
            default:
                break
        }
    }

    render() {
        return(
            <div className="row border-bottom">
                <div className="col-md-6">
                <CursoForm alteraCampos={this.alteraCampos.bind(this)}
                    codigo={this.state.codigo}
                    descricao={this.state.descricao}
                    cargaHoraria={this.state.cargaHoraria}
                    preco={this.state.preco}
                    categoria={this.state.categoria}
                    adicionarCurso={this.adicionarCurso.bind(this)}
                />
                </div>
                <div className="col-md-6">
                    <CursoList listaCursos={this.state.data}
                        removerCurso={this.removerCurso.bind(this)}
                    />
                </div>
            </div>

        )
    }
}