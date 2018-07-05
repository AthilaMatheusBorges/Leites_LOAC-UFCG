import React from 'react'
import { Text, StyleSheet, View, ScrollView, TextInput, Button, Alert } from 'react-native'

import Barra from '../Component/Barra'
import Rodape from '../Component/Rodape';
import RiscV from '../Class/RiscV';

export default class Terminal extends React.Component {
    state = { registradores: new RiscV(), rd:'', param:[], instrucao:'', comandos:[], comando:'' };
    
    render() {
        return(
            <View style={styles.container}>
                <Barra />
                <View style={styles.conteudo} >
                    <View style={styles.input}>
                        <TextInput placeholder='Digite o comando (ex: addi x0 x1 17)' onChangeText={(value) => {
                            // Alert.alert(value);
                            this.setState({comando: value});
                        }} style={styles.inputTxt}/>
                        <Button title='submit' onPress={()=>{
                            let array = [ ... this.state.comandos.push(this.state.comando)];
                            console.log(array);
                            this.setState({comandos : array, comando:''});
                            // alert(this.state.comando);
                            // console.log(this.state.comandos)
                        }}/>
                    </View>
                    <ScrollView style={{alignContent:'center'}}>
                        {this.state.comandos.map((element, id) => {
                            <Text style={styles.txt}> {element} </Text>
                        })}
                    </ScrollView>
                    <View style={styles.result} >
                        <Text>{this.state.registradores.toString()}</Text>
                    </View>
                </View>
                <Rodape />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    inputTxt:{
        flex:1,
        backgroundColor:'#fff',
        marginHorizontal: 5,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    input:{
        backgroundColor:'#ccc',
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    conteudo:{
        flex:1,
    },
    result:{
        flex:0.4, 
        backgroundColor:'#ccc', 
        justifyContent:'center', 
        alignItems:'center'
    },
    txt:{
        textAlign:'center',
        fontSize: 18,
    }
});
