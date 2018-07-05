import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Barra extends React.Component {
    render() {
        return (
            <View style={ styles.container }>
                <Text style={ styles.txtTitulo }> Labarc Risc-V </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:0.2,
        backgroundColor:'#3399cc',
        justifyContent:'center',
        alignItems:'center',
    },
    txtTitulo:{
        fontSize:30,
        fontWeight:'600',
        color:'#330066'
        // color:'#fff'
    }
})
