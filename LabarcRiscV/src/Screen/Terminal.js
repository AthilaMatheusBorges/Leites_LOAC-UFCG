import React from 'react'
import { Text, StyleSheet, View, ScrollView, TextInput, Button } from 'react-native'

import Barra from '../Component/Barra'
import Rodape from '../Component/Rodape'
import RiscV from '../Class/RiscV'

const risc = new RiscV()
export default class Terminal extends React.Component {
  constructor () {
    super()
    this.state = { comandos: [], comando: '', result: risc.toString() }
  }
  render () {
    return (
      <View style={styles.container}>
        <Barra />
        <View style={styles.conteudo} >
          <View style={styles.input}>
            <TextInput placeholder='Digite o comando (ex: addi s0 zero 17)'
              onChangeText={(value) => {
                this.setState({ comando: value })
              }}
              style={styles.inputTxt}
            />
            <Button title='submit' onPress={() => {
              let comandos = []
              comandos = this.state.comandos
              comandos.push(this.state.comando)
              let result = risc.make(this.state.comando)
              this.setState({
                comandos,
                result})
            }} />
          </View>
          <ScrollView style={{alignSelf: 'center', flex: 1, paddingVertical: 10, paddingHorizontal: 20}}>
            {this.state.comandos.map((element, id) =>
              <Text style={styles.txt} key={id}> {element} </Text>
            )}
          </ScrollView>
          <View style={styles.result} >
            <Text style={styles.tx}>{risc.toString()}</Text>
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
  conteudo: {
    flex: 1
  },
  result: {
    flex: 0.6,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center'
    // marginHorizontal: 20,
  },
  txt: {
    fontSize: 16,
    backgroundColor: '#ccc',
    color: '#000'
  }
})
