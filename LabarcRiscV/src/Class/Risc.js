const opCode = ['0000011','0001111','0010011','0010111','0110011','0110111',
'1100011','1100111','1101111','1110011'];
// return instAdd = '0000000'+rs2+rs1+'000'+rd+opCode[4];
const inst_add = (rd,rs1, rs2) => {
    let instAdd = '', param1=rd.toString(2), param2=rs1.toString(2), param3=rs2.toString(2);
    for(let i=param1.length; i<=5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<=5; i++){
        param2 = '0'+param2;
    }
    for(let i=param3.length; i<=5; i++){
        param3 = '0'+param3;
    }
    return instAdd = '0000000'+param3+param2+'000'+param1+opCode[4];
}
const inst_addi = (rd,rs1, cst) => {
    let instAddi = '', param1=rd.toString(2), param2=rs1.toString(2), param3=cst.toString(2);
    for(let i=param1.length; i<=5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<=5; i++){
        param2 = '0'+param2;
    }
    for(let i=param3.length; i<=11; i++){
        param3 = '0'+param3;
    }
    // rd = rd.slice(0, -1), rs1 = rs1.slice(0, -1);
    return instAddi = param3+param2+'000'+param1+opCode[2];
}
const inicializar = () => {
    let retorno = {};
    for(let i=0; i<32; i++){
        let registrador = ('x'+i.toString());
        retorno[registrador] = 0;
    }
    return retorno;
}

let RiscV = ( ()=>{
    const registradores = new WeakMap();
    class RiscV{
        constructor(){
            registradores.set(this, inicializar());
        }
        clean(){
            registradores.set(this, inicializar());
        }
        toString(){
            let array = [], retorno ='';
            Object.getOwnPropertyNames(registradores.get(this)).map( key => {
                value = registradores.get(this)[key];
                array.push(`${key} : ${value.toString(16)}`);
            });
            for(let i=0; i<array.length; i++){
                retorno += array[i] + (((i+1)%4) ? "\t":'\n')
            }
            return retorno;
        }
        instructionAdd(rd=String, rs1=String, rs2=String){
            let param1 = parseInt(rd.slice(1)), param2 = parseInt(rs1.slice(1)), param3 = parseInt(rs2.slice(1));
            return inst_add(param1, param2, param3);
        }
        instructionAddi(rd=String, rs1=String, imm=Number){
            let param1 = parseInt(rd.slice(1)), param2 = parseInt(rs1.slice(1));
            return inst_addi(param1, param2, imm);
        }
    }
    return RiscV;
})();

exports.default = RiscV;
module.exports = exports['default'];