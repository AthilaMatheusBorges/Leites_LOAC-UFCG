import React from 'react'
import { StyleSheet, View } from 'react-native'

import Barra from '../Component/Barra'
import Rodape from '../Component/Rodape';
import Botao from '../Component/Botao';

export default class Principal extends React.Component {
    render() {
        const { container, menu, conteudo } = styles;
        return (
            <View style={container}>
                <Barra />
                <View style={conteudo}>
                    <View style={menu}>
                        <Botao name='Terminal' onPress={() => this.props.navigation.navigate('Terminal')}/>
                        <Botao name='Instrução' onPress={() => this.props.navigation.navigate('Intrucoes')}/>
                    </View>
                    <View style={menu}>
                        <Botao name='O que é?' onPress={() =>  this.props.navigation.navigate('Oque')}/>
                        <Botao name='Comandos' onPress={() =>  this.props.navigation.navigate('Comandos')}/>
                    </View>
                </View>
                <Rodape />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    conteudo:{
        flex:0.7,
        paddingTop: 20,
        marginHorizontal: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    menu:{
        flexDirection:'row'
    }
});

