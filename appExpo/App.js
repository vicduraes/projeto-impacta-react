import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import axios from 'axios'

const URL = "http://172.16.20.59:3200/api/curso"

export default class App extends React.Component {

  initialState = {
    data: [],
    isRefreshing: false
  }

  constructor(props){
    super(props)
    this.state = this.initialState
  }

  componentDidMount() {
    axios.get(URL).then(response => {
      if(response.data) {
        this.setState({...this.state, data: response.data})
      }
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Lista de Cursos</Text>
        <SafeAreaView style={styles.conteudo}>
          <FlatList
            keyExtractor={(_, index) => index.toString()}
            data={this.state.data}
            renderItem={({item, index}) => {
              return (
                <View style={styles.item}>
                  <Text style={styles.conteudo}>{item.codigo}</Text>
                  <Text style={styles.conteudo}>{item.descricao}</Text>
                  <Text style={styles.conteudo}>{item.cargaHoraria}</Text>
                  <Text style={styles.conteudo}>{item.preco}</Text>
                  <Text style={styles.conteudo}>{item.categoria}</Text>
                </View>
            )
          }}/>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '15%'
  },
  conteudo: {
    margin: 10,
    borderWidth: 1,
    backgroundColor: 'white',
    fontSize: 20
  },
  texto: {
    alignItems: "center",
    fontSize: 30,
    margin: 20,
    color: '#FF0000',
  },
  item: {
    alignItems: "center",
    backgroundColor: "#dcda44",
    flexGrow: 1,
    margin: 4,
    padding: 20
  },
  conteudo: {
    color: "#333333"
  }
});