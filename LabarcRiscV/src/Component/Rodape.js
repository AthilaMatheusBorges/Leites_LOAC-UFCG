import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Rodape extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}> LOAC é peso! </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center', 
        alignItems:'center', 
        flex:0.1, 
        backgroundColor:'#3399cc'
    }, 
    txt:{
        fontSize: 15, 
        // color:'#fff',
        color:'#330066'
    }
});
