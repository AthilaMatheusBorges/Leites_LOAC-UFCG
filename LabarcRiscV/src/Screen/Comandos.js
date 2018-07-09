import React from 'react'
import { ScrollView, View, StyleSheet, Image } from 'react-native'

import Barra from '../Component/Barra'
import Rodape from '../Component/Rodape'
import img from '../imgs/instructions.png'
import Dimensions from 'Dimensions'
const width = Dimensions.get('window').width; const height = Dimensions.get('window').height

export default class Comandos extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Barra />
        <ScrollView contentContainerStyle={styles.contentContainer} scrollEnabled >
          <Image source={img} style={styles.image}/>
        </ScrollView>
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
  contentContainer: {
    flex: 1,
    // marginTop:10,
    paddingTop: 20,
    // alignItems:'center',
    justifyContent: 'center'

  },
  image: {
    width,
    height,
    resizeMode: 'contain',
    paddingHorizontal: 10
  }
})
