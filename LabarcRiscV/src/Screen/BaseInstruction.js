import React from 'react'
import { Text, StyleSheet, View, ScrollView, TextInput, Picker, Button } from 'react-native'

import Barra from '../Component/Barra'
import Rodape from '../Component/Rodape';
import RiscV from '../Class/RiscV';

export default class BaseInstruction extends React.Component {
    state = { registradores: new RiscV(), rd:'', param:[], instrucao:'', comando:'' };

    _onChange(instrucao=String, rd=String, param=[String]){
        this.setState({instrucao, rd, param});
    }
    render() {
        return(
            <View style={styles.container}>
                <Barra />
                <View style={styles.conteudo}>
                    <View style={styles.input}>
                        <TextInput placeholder='Digite o comando (ex: addi x0 x1 17)' onChangeText={(value) => {
                            let input = formatarEntrada(value);
                            this._onChange(input[0], input[1], input[2]);
                        }} style={styles.inputTxt}/>
                        <Button title='submit' onPress={()=>{
                            this.setState({comando:
                                this.state.registradores.baseInstruction(this.state.instrucao, this.state.rd, this.state.param)
                            });
                        }}/>
                    </View>
                    <View style={styles.result}>
                        <Text style={styles.txtResult}>bin: {this.state.comando}</Text>
                        <Text style={styles.txtResult}>hex: { (this.state.comando) ? parseInt(this.state.comando, 2).toString(16):'' }</Text>
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
    result:{
        paddingVertical: 10,
        justifyContent:'center',
        backgroundColor:'#ccc',
        marginTop:50,
        marginHorizontal: 10,
        paddingHorizontal: 20,
    },
    conteudo:{
        flex:1,
    },
    txtResult:{
        // color:'#ccc'
    }
})

const formatarEntrada = (value=String) => {
    let retorno = [], input = value.toLowerCase().trim().split(' ');
    for(let i=0; i<2; i++){
        if(input.length>0){
            retorno.push(input.shift());
        }  else {
            break;
        }
    }
    retorno.push(input);
    return retorno;
}
