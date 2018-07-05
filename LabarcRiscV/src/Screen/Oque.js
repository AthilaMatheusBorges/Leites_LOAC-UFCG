import React from 'react'
import { View, WebView, StyleSheet } from 'react-native'
const url = {uri: 'https://pt.wikipedia.org/wiki/RISC-V'};

import Barra from '../Component/Barra'
import Rodape from '../Component/Rodape';

export default class Oque extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <Barra />
            <WebView
                source={url} />
            <Rodape />
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff'
    }
})
