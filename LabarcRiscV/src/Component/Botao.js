import React from 'react'
import { Text, StyleSheet, TouchableHighlight } from 'react-native'

export default class Botao extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress} style={styles.botao}
      underlayColor={'#3399cc'}
      activeOpacity={0.6}  >
            <Text style={{color:'#fff', fontWeight:'600'}}> {this.props.name} </Text>
      </TouchableHighlight>
    )
  }
}
//3399cc
const styles = StyleSheet.create({
    boxTxt:{
        
    },
    botao:{
        flex:1,
        height: 100,
        width:100,
        backgroundColor:'#330066',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems:'center',
        paddingTop: 50,
        // marginHorizontal: 20,

        margin: 15,
        // marginVertical: 50,
    }
})
