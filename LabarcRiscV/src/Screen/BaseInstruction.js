import React from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'

import Barra from '../Component/Barra'
import Rodape from '../Component/Rodape'
import RiscV from '../Class/RiscV'

let risc = new RiscV()
export default class BaseInstruction extends React.Component {
  constructor () {
    super()
    this.state = {
      comando: '', instrucao: ''
    }
  }
  render () {
    return (
      <View style = { styles.container } >
        <Barra />
        <View style = { styles.conteudo } >
          <View style = { styles.input } >
            <TextInput placeholder = 'Digite o comando (ex: addi s0 zero 17)'
              onChangeText = { comando => {
                this.setState({comando})
              }} style = { styles.inputTxt }/>
            <Button title = 'submit' onPress = { () => {
              this.setState({instrucao: risc.baseInstruction(this.state.comando)})
            }}/>
          </View>
          <View style={styles.result}>
            <Text style={styles.txtResult}>bin: {this.state.instrucao}</Text>
            <Text style={styles.txtResult}>hex: { (this.state.instrucao) ? parseInt(this.state.instrucao, 2).toString(16) : '' }</Text>
          </View>
        </View>
        <Rodape />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  inputTxt: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  input: {
    backgroundColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  result: {
    paddingVertical: 10,
    justifyContent: 'center',
    backgroundColor: '#ccc',
    marginTop: 50,
    marginHorizontal: 10,
    paddingHorizontal: 20
  },
  conteudo: {
    flex: 1
  },
  txtResult: {
    // color:'#ccc'
  }
})
