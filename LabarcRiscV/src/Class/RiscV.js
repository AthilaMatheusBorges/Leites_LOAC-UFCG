const opCode = ['0000011','0001111','0010011','0010111','0100011','0110011','0110111',
'1100011','1100111','1101111','1110011'];
const reg = new WeakMap();
const inicializar = () => {
    let array = {};
    for(let i=0; i<32; i++){
        array[('x'+i)] = 0;
    }
    return array;
}
const add = (rd=String, rs1=String, rs2=String) => {
    // falta entender a instrucao
    // codIndisponivel();
    reg.get(this)[rd] += reg.get(this)[rs1] + reg.get(this)[rs2];
}
const addi = (rd=String, rs1=String, cst=Number) => {
    // falta entender a instrucao
    // codIndisponivel();
    reg.get(this)[rd] += reg.get(this)[rs1] + cst;
}
const inst_lui = (rd=Number, cst=Number) => {
    let param1=rd.toString(2), param3=cst.toString(2);
    for(let i=param3.length; i<20; i++){
        param3 = '0'+param3;
    }
    if(cst < 0){
        let inverse = false;
        for(let i=param3.length-1; i>= 0; i--){
            if(inverse){
                param3[i] = ((param3[i] === '1') ? '0': '1');
            } else {
                if(param3[i] === '1'){
                    inverse = true;
                }
            }
        }
    }
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    return param3+param1+opCode[6];
}
const inst_auipc = (rd=Number, cst=Number) => {
    let param1=rd.toString(2), param3=cst.toString(2);
    for(let i=param3.length; i<20; i++){
        param3 = '0'+param3;
    }
    if(cst < 0){
        let inverse = false;
        for(let i=param3.length-1; i>= 0; i--){
            if(inverse){
                param3[i] = ((param3[i] === '1') ? '0': '1');
            } else {
                if(param3[i] === '1'){
                    inverse = true;
                }
            }
        }
    }
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    return param3+param1+opCode[3];
}
const inst_jal = (rd=Number, cst=Number) => {
    // falta entender a instrucao
    // codIndisponivel();
    let param1=rd.toString(2), param3=cst.toString(2);
    for(let i=param3.length; i<20; i++){
        param3 = '0'+param3;
    }
    if(cst < 0){
        let inverse = false;
        for(let i=param3.length-1; i>= 0; i--){
            if(inverse){
                param3[i] = ((param3[i] === '1') ? '0': '1');
            } else {
                if(param3[i] === '1'){
                    inverse = true;
                }
            }
        }
    }
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    return param3.slice(19)+param3.slice(0,10)+param3.slice(10,11)+param3.slice(11, 19)+'000'+param1+opCode[10];
}
const inst_jalr = (rd=Number, rs1=Number, cst=Number) => {
    let param1=rd.toString(2), param2=rs1.toString(2), param3=cst.toString(2);
    for(let i=param3.length; i<12; i++){
        param3 = '0'+param3;
    }
    if(cst < 0){
        let inverse = false;
        for(let i=param3.length-1; i>= 0; i--){
            if(inverse){
                param3[i] = ((param3[i] === '1') ? '0': '1');
            } else {
                if(param3[i] === '1'){
                    inverse = true;
                }
            }
        }
    }
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    return param3+param2+'000'+param1+opCode[8];
}
const inst_beq = (cst=Number, rs1=Number, rs2=Number) => {
    // falta entender a instrucao
    // codIndisponivel();
    let param2=rs2.toString(2), param1=rs1.toString(2), param3=cst.toString(2);
    for(let i=param3.length; i<12; i++){
        param3 = '0'+param3;
    }
    if(cst < 0){
        let inverse = false;
        for(let i=param3.length-1; i>= 0; i--){
            if(inverse){
                param3[i] = ((param3[i] === '1') ? '0': '1');
            } else {
                if(param3[i] === '1'){
                    inverse = true;
                }
            }
        }
    }
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    return param3.slice(11)+param3.slice(4,10)+param2+param1+'000'+param3.slice(0,4)+param3.slice(10,-1)+opCode[7];
}
const inst_bne = (cst1=Number, rs1=Number, rs2=Number, cst2=Number) => {
    // falta entender a instrucao
    // codIndisponivel();
    let param2=rs2.toString(2), param1=rs1.toString(2), param3=cst.toString(2);
    for(let i=param3.length; i<12; i++){
        param3 = '0'+param3;
    }
    if(cst < 0){
        let inverse = false;
        for(let i=param3.length-1; i>= 0; i--){
            if(inverse){
                param3[i] = ((param3[i] === '1') ? '0': '1');
            } else {
                if(param3[i] === '1'){
                    inverse = true;
                }
            }
        }
    }
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    return param3.slice(11)+param3.slice(4,10)+param2+param1+'001'+param3.slice(0,4)+param3.slice(10,-1)+opCode[7];
}
const inst_blt = (cst1=Number, rs1=Number, rs2=Number, cst2=Number) => {
    // falta entender a instrucao
    // codIndisponivel();
    let param2=rs2.toString(2), param1=rs1.toString(2), param3=cst.toString(2);
    for(let i=param3.length; i<12; i++){
        param3 = '0'+param3;
    }
    if(cst < 0){
        let inverse = false;
        for(let i=param3.length-1; i>= 0; i--){
            if(inverse){
                param3[i] = ((param3[i] === '1') ? '0': '1');
            } else {
                if(param3[i] === '1'){
                    inverse = true;
                }
            }
        }
    }
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    return param3.slice(11)+param3.slice(4,10)+param2+param1+'100'+param3.slice(0,4)+param3.slice(10,-1)+opCode[7];
}
const inst_bge = (cst1=Number, rs1=Number, rs2=Number, cst2=Number) => {
    // falta entender a instrucao
    // codIndisponivel();
    let param2=rs2.toString(2), param1=rs1.toString(2), param3=cst.toString(2);
    for(let i=param3.length; i<12; i++){
        param3 = '0'+param3;
    }
    if(cst < 0){
        let inverse = false;
        for(let i=param3.length-1; i>= 0; i--){
            if(inverse){
                param3[i] = ((param3[i] === '1') ? '0': '1');
            } else {
                if(param3[i] === '1'){
                    inverse = true;
                }
            }
        }
    }
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    return param3.slice(11)+param3.slice(4,10)+param2+param1+'101'+param3.slice(0,4)+param3.slice(10,-1)+opCode[7];
}
const inst_bltu = (cst1=Number, rs1=Number, rs2=Number, cst2=Number) => {
    // falta entender a instrucao
    // codIndisponivel();
    let param2=rs2.toString(2), param1=rs1.toString(2), param3=cst.toString(2);
    for(let i=param3.length; i<12; i++){
        param3 = '0'+param3;
    }
    if(cst < 0){
        let inverse = false;
        for(let i=param3.length-1; i>= 0; i--){
            if(inverse){
                param3[i] = ((param3[i] === '1') ? '0': '1');
            } else {
                if(param3[i] === '1'){
                    inverse = true;
                }
            }
        }
    }
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    return param3.slice(11)+param3.slice(4,10)+param2+param1+'110'+param3.slice(0,4)+param3.slice(10,-1)+opCode[7];
}
const inst_bgeu = (cst1=Number, rs1=Number, rs2=Number, cst2=Number) => {
    // falta entender a instrucao
    // codIndisponivel();
    let param2=rs2.toString(2), param1=rs1.toString(2), param3=cst.toString(2);
    for(let i=param3.length; i<12; i++){
        param3 = '0'+param3;
    }
    if(cst < 0){
        let inverse = false;
        for(let i=param3.length-1; i>= 0; i--){
            if(inverse){
                param3[i] = ((param3[i] === '1') ? '0': '1');
            } else {
                if(param3[i] === '1'){
                    inverse = true;
                }
            }
        }
    }
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    return param3.slice(11)+param3.slice(4,10)+param2+param1+'111'+param3.slice(0,4)+param3.slice(10,-1)+opCode[7];
}
const inst_lb = (rd=Number, rs1=Number, cst=Number) => {
    let param1=rd.toString(2), param2=rs1.toString(2), param3=cst.toString(2);
    for(let i=param3.length; i<12; i++){
        param3 = '0'+param3;
    }
    if(cst < 0){
        let inverse = false;
        for(let i=param3.length-1; i>= 0; i--){
            if(inverse){
                param3[i] = ((param3[i] === '1') ? '0': '1');
            } else {
                if(param3[i] === '1'){
                    inverse = true;
                }
            }
        }
    }
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    return param3+param2+'000'+param1+opCode[0];
}
const inst_lh = (rd=Number, rs1=Number, cst=Number) => {
    
    let param1=rd.toString(2), param2=rs1.toString(2), param3=cst.toString(2);
    for(let i=param3.length; i<12; i++){
        param3 = '0'+param3;
    }
    if(cst < 0){
        let inverse = false;
        for(let i=param3.length-1; i>= 0; i--){
            if(inverse){
                param3[i] = ((param3[i] === '1') ? '0': '1');
            } else {
                if(param3[i] === '1'){
                    inverse = true;
                }
            }
        }
    }
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    return param3+param2+'001'+param1+opCode[0];
}
const inst_lw = (rd=Number, rs1=Number, cst=Number) => {
    
    let param1=rd.toString(2), param2=rs1.toString(2), param3=cst.toString(2);
    for(let i=param3.length; i<12; i++){
        param3 = '0'+param3;
    }
    if(cst < 0){
        let inverse = false;
        for(let i=param3.length-1; i>= 0; i--){
            if(inverse){
                param3[i] = ((param3[i] === '1') ? '0': '1');
            } else {
                if(param3[i] === '1'){
                    inverse = true;
                }
            }
        }
    }
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    return param3+param2+'010'+param1+opCode[0];
}
const inst_lbu = (rd=Number, rs1=Number, cst=Number) => {
    
    let param1=rd.toString(2), param2=rs1.toString(2), param3=cst.toString(2);
    for(let i=param3.length; i<12; i++){
        param3 = '0'+param3;
    }
    if(cst < 0){
        let inverse = false;
        for(let i=param3.length-1; i>= 0; i--){
            if(inverse){
                param3[i] = ((param3[i] === '1') ? '0': '1');
            } else {
                if(param3[i] === '1'){
                    inverse = true;
                }
            }
        }
    }
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    return param3+param2+'100'+param1+opCode[0];
}
const inst_lhu = (rd=Number, rs1=Number, cst=Number) => {
    
    let param1=rd.toString(2), param2=rs1.toString(2), param3=cst.toString(2);
    for(let i=param3.length; i<12; i++){
        param3 = '0'+param3;
    }
    if(cst < 0){
        let inverse = false;
        for(let i=param3.length-1; i>= 0; i--){
            if(inverse){
                param3[i] = ((param3[i] === '1') ? '0': '1');
            } else {
                if(param3[i] === '1'){
                    inverse = true;
                }
            }
        }
    }
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    return param3+param2+'101'+param1+opCode[0];
}
const inst_sb = (cst=Number, rs1=Number, rs2=Number) => {
    let param1=rd.toString(2), param2=rs1.toString(2), param3=cst.toString(2);
    for(let i=param3.length; i<12; i++){
        param3 = '0'+param3;
    }
    if(cst < 0){
        let inverse = false;
        for(let i=param3.length-1; i>= 0; i--){
            if(inverse){
                param3[i] = ((param3[i] === '1') ? '0': '1');
            } else {
                if(param3[i] === '1'){
                    inverse = true;
                }
            }
        }
    }
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    return param3.slice(0,7)+param2+param1+'000'+param3.slice(7,12)+opCode[4];
}
const inst_sh = (cst=Number, rs1=Number, rs2=Number) => {
    let param1=rd.toString(2), param2=rs1.toString(2), param3=cst.toString(2);
    for(let i=param3.length; i<12; i++){
        param3 = '0'+param3;
    }
    if(cst < 0){
        let inverse = false;
        for(let i=param3.length-1; i>= 0; i--){
            if(inverse){
                param3[i] = ((param3[i] === '1') ? '0': '1');
            } else {
                if(param3[i] === '1'){
                    inverse = true;
                }
            }
        }
    }
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    return param3.slice(0,7)+param2+param1+'001'+param3.slice(7,12)+opCode[4];  
}
const inst_sw = (cst=Number, rs1=Number, rs2=Number) => {
    let param1=rd.toString(2), param2=rs1.toString(2), param3=cst.toString(2);
    for(let i=param3.length; i<12; i++){
        param3 = '0'+param3;
    }
    if(cst < 0){
        let inverse = false;
        for(let i=param3.length-1; i>= 0; i--){
            if(inverse){
                param3[i] = ((param3[i] === '1') ? '0': '1');
            } else {
                if(param3[i] === '1'){
                    inverse = true;
                }
            }
        }
    }
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    return param3.slice(0,7)+param2+param1+'010'+param3.slice(7,12)+opCode[4];
}
const inst_addi = (rd=Number, rs1=Number, cst=Number) => {
    let param1=rd.toString(2), param2=rs1.toString(2), param3=cst.toString(2);
    for(let i=param3.length; i<12; i++){
        param3 = '0'+param3;
    }
    if(cst < 0){
        let inverse = false;
        for(let i=param3.length-1; i>= 0; i--){
            if(inverse){
                param3[i] = ((param3[i] === '1') ? '0': '1');
            } else {
                if(param3[i] === '1'){
                    inverse = true;
                }
            }
        }
    }
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    return param3+param2+'000'+param1+opCode[2];
}
const inst_slti = (rd=Number, rs1=Number, cst=Number) => {
    let param1=rd.toString(2), param2=rs1.toString(2), param3=cst.toString(2);
    for(let i=param3.length; i<12; i++){
        param3 = '0'+param3;
    }
    if(cst < 0){
        let inverse = false;
        for(let i=param3.length-1; i>= 0; i--){
            if(inverse){
                param3[i] = ((param3[i] === '1') ? '0': '1');
            } else {
                if(param3[i] === '1'){
                    inverse = true;
                }
            }
        }
    }
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    return param3+param2+'010'+param1+opCode[2];
}
const inst_sltiu = (rd=Number, rs1=Number, cst=Number) => {
    let param1=rd.toString(2), param2=rs1.toString(2), param3=cst.toString(2);
    for(let i=param3.length; i<12; i++){
        param3 = '0'+param3;
    }
    if(cst < 0){
        let inverse = false;
        for(let i=param3.length-1; i>= 0; i--){
            if(inverse){
                param3[i] = ((param3[i] === '1') ? '0': '1');
            } else {
                if(param3[i] === '1'){
                    inverse = true;
                }
            }
        }
    }
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    return param3+param2+'011'+param1+opCode[2];
}
const inst_xori = (rd=Number, rs1=Number, cst=Number) => {
    let param1=rd.toString(2), param2=rs1.toString(2), param3=cst.toString(2);
    for(let i=param3.length; i<12; i++){
        param3 = '0'+param3;
    }
    if(cst < 0){
        let inverse = false;
        for(let i=param3.length-1; i>= 0; i--){
            if(inverse){
                param3[i] = ((param3[i] === '1') ? '0': '1');
            } else {
                if(param3[i] === '1'){
                    inverse = true;
                }
            }
        }
    }
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    return param3+param2+'100'+param1+opCode[2];
}
const inst_ori = (rd=Number, rs1=Number, cst=Number) => {
    let param1=rd.toString(2), param2=rs1.toString(2), param3=cst.toString(2);
    for(let i=param3.length; i<12; i++){
        param3 = '0'+param3;
    }
    if(cst < 0){
        let inverse = false;
        for(let i=param3.length-1; i>= 0; i--){
            if(inverse){
                param3[i] = ((param3[i] === '1') ? '0': '1');
            } else {
                if(param3[i] === '1'){
                    inverse = true;
                }
            }
        }
    }
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    return param3+param2+'110'+param1+opCode[2];
}
const inst_andi = (rd=Number, rs1=Number, cst=Number) => {
    let param1=rd.toString(2), param2=rs1.toString(2), param3=cst.toString(2);
    for(let i=param3.length; i<12; i++){
        param3 = '0'+param3;
    }
    if(cst < 0){
        let inverse = false;
        for(let i=param3.length-1; i>= 0; i--){
            if(inverse){
                param3[i] = ((param3[i] === '1') ? '0': '1');
            } else {
                if(param3[i] === '1'){
                    inverse = true;
                }
            }
        }
    }
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    return param3+param2+'111'+param1+opCode[2];
}
const inst_slli = (rd=Number, rs1=Number, shamt=Number) => {
    let param1=rd.toString(2), param2=rs1.toString(2), param3=shamt.toString(2);
    for(let i=param3.length; i<5; i++){               // verificar shamt
        param3 = '0'+param3;
    }
    // verificar shamt
    if(shamt < 0){
        let inverse = false;
        for(let i=param3.length-1; i>= 0; i--){
            if(inverse){
                param3[i] = ((param3[i] === '1') ? '0': '1');
            } else {
                if(param3[i] === '1'){
                    inverse = true;
                }
            }
        }
    }
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    return '0000000'+param3+param2+'001'+param1+opCode[2];
}
const inst_srli = (rd=Number, rs1=Number, shamt=Number) => {
    let param1=rd.toString(2), param2=rs1.toString(2), param3=shamt.toString(2);
    for(let i=param3.length; i<5; i++){               // verificar shamt
        param3 = '0'+param3;
    }
    // verificar shamt
    if(shamt < 0){
        let inverse = false;
        for(let i=param3.length-1; i>= 0; i--){
            if(inverse){
                param3[i] = ((param3[i] === '1') ? '0': '1');
            } else {
                if(param3[i] === '1'){
                    inverse = true;
                }
            }
        }
    }
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    return '0000000'+param3+param2+'101'+param1+opCode[2];
}
const inst_srai = (rd=Number, rs1=Number, shamt=Number) => {
    let param1=rd.toString(2), param2=rs1.toString(2), param3=shamt.toString(2);
    for(let i=param3.length; i<5; i++){               // verificar shamt
        param3 = '0'+param3;
    }
    // verificar shamt
    if(shamt < 0){
        let inverse = false;
        for(let i=param3.length-1; i>= 0; i--){
            if(inverse){
                param3[i] = ((param3[i] === '1') ? '0': '1');
            } else {
                if(param3[i] === '1'){
                    inverse = true;
                }
            }
        }
    }
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    return '0100000'+param3+param2+'101'+param1+opCode[2];
}
const inst_add = (rd=Number, rs1=Number, rs2=Number) => {
    let param1=rd.toString(2), param2=rs1.toString(2), param3=rs2.toString(2);
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    for(let i=param3.length; i<5; i++){
        param3 = '0'+param3;
    }
    return '0000000'+param3+param2+'000'+param1+opCode[5];
}
const inst_sub = (rd=Number, rs1=Number, rs2=Number) => {
    let param1=rd.toString(2), param2=rs1.toString(2), param3=rs2.toString(2);
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    for(let i=param3.length; i<5; i++){
        param3 = '0'+param3;
    }
    return '0100000'+param3+param2+'000'+param1+opCode[5];
}
const inst_sll = (rd=Number, rs1=Number, rs2=Number) => {
    let param1=rd.toString(2), param2=rs1.toString(2), param3=rs2.toString(2);
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    for(let i=param3.length; i<5; i++){
        param3 = '0'+param3;
    }
    return '0000000'+param3+param2+'001'+param1+opCode[5];
}
const inst_slt = (rd=Number, rs1=Number, rs2=Number) => {
    let param1=rd.toString(2), param2=rs1.toString(2), param3=rs2.toString(2);
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    for(let i=param3.length; i<5; i++){
        param3 = '0'+param3;
    }
    return '0000000'+param3+param2+'010'+param1+opCode[5];
}
const inst_sltu = (rd=Number, rs1=Number, rs2=Number) => {
    let param1=rd.toString(2), param2=rs1.toString(2), param3=rs2.toString(2);
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    for(let i=param3.length; i<5; i++){
        param3 = '0'+param3;
    }
    return '0000000'+param3+param2+'011'+param1+opCode[5];
}
const inst_xor = (rd=Number, rs1=Number, rs2=Number) => {
    let param1=rd.toString(2), param2=rs1.toString(2), param3=rs2.toString(2);
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    for(let i=param3.length; i<5; i++){
        param3 = '0'+param3;
    }
    return '0000000'+param3+param2+'100'+param1+opCode[5];
}
const inst_srl = (rd=Number, rs1=Number, rs2=Number) => {
    let param1=rd.toString(2), param2=rs1.toString(2), param3=rs2.toString(2);
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    for(let i=param3.length; i<5; i++){
        param3 = '0'+param3;
    }
    return '0000000'+param3+param2+'101'+param1+opCode[5];
}
const inst_sra = (rd=Number, rs1=Number, rs2=Number) => {
    let param1=rd.toString(2), param2=rs1.toString(2), param3=rs2.toString(2);
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    for(let i=param3.length; i<5; i++){
        param3 = '0'+param3;
    }
    return '0100000'+param3+param2+'101'+param1+opCode[5];
}
const inst_or = (rd=Number, rs1=Number, rs2=Number) => {
    let param1=rd.toString(2), param2=rs1.toString(2), param3=rs2.toString(2);
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    for(let i=param3.length; i<5; i++){
        param3 = '0'+param3;
    }
    return '0000000'+param3+param2+'110'+param1+opCode[5];
}
const inst_and = (rd=Number, rs1=Number, rs2=Number) => {
    let param1=rd.toString(2), param2=rs1.toString(2), param3=rs2.toString(2);
    for(let i=param1.length; i<5; i++){
        param1 = '0'+param1;
    }
    for(let i=param2.length; i<5; i++){
        param2 = '0'+param2;
    }
    for(let i=param3.length; i<5; i++){
        param3 = '0'+param3;
    }
    return '0000000'+param3+param2+'111'+param1+opCode[5];
}
const inst_fence = (pred, succ) => { 
    // falta entender a instrucao
    codIndisponivel();
    //opCode[1]
    // return '0000'+pred+succ+'00000'+'001'+'00000'+opCode[1];
}
export default class RiscV {
    constructor(){
        reg.set(this, inicializar());
    }
    clean(){
        reg.set(this, inicializar());
    }
    toString(){
        let string ='';
        Object.getOwnPropertyNames(reg.get(this)).forEach((element, index) => {
            string += element+'\t:\t'+(reg.get(this)[element]).toString(16);
            string += (((index +1)%4) ? '\t' : '\n');
        });
        return string;
    }
    this(){
        return this;
    }
    make(instrucao=String, rd='', param=[] ){
        let checkParam=true;
        rd = parametrizar(rd);
        for(let i=0; i<param.length; i++){
            param[i] = parametrizar(param[i]);
        }
        for(let i=0; i<param.length; i++){
            if(param[i] === ''){
                checkParam = false;
                break;
            }
        }
        if(rd !== '' && checkParam && !['x0', 'x3','x4'].includes(rd)) {
            switch (instrucao) {/*
                case 'lui':
                    if(isNaN(parseInt(rd)) && !isNaN(parseInt(param[0]))) {
                        lui(parseInt(rd.slice(1)), parseInt(param[0]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'auipc':
                    if(isNaN(parseInt(rd)) && !isNaN(parseInt(param[0]))) {
                        auipc(parseInt(rd.slice(1)), parseInt(param[0]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'jal':
                    if(isNaN(parseInt(rd)) && !isNaN(parseInt(param[0]))) {
                        jal(parseInt(rd.slice(1)), parseInt(param[0]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'jalr':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        jalr(parseInt(rd.slice(1)),parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'beq':
                    if(!isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        beq(parseInt(rd), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'bne':
                    if(!isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        bne(parseInt(rd), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'blt':
                    if(!isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        blt(parseInt(rd), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'bge':
                    if(!isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        bge(parseInt(rd), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'bltu':
                    if(!isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        bltu(parseInt(rd), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'bgeu':
                    if(!isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        bgeu(parseInt(rd), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'lb':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        lb(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'lh':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        lh(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'lw':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        lw(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'lbu':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        lbu(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'lhu':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        lhu(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'sb':
                    if(!isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        sb(parseInt(rd), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'sh':
                    if(!isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        sh(parseInt(rd), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'sw':
                    if(!isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        sw(parseInt(rd), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;*/            
                case 'addi':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        addi(rd, param[0], parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;/*
                case 'slti':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        slti(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'sltiu':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        sltiu(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'xori':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        xori(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'ori':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        ori(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'andi':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        andi(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'slli':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        slli(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'srli':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        srli(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'srai':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        srai(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;*/
                case 'add':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        add(rd, param[0], param[1]);
                    } else {
                        alert('Comando inválido');
                    }
                    break;/*
                case 'sub':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        sub(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'sll':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        sll(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'slt':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        slt(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'sltu':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        sltu(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'xor':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        xor(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'srl':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        srl(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'sra':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        sra(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'or':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        or(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'and':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        and(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'fence':
                    instru = inst_fence(rd, param[0]);
                    break;
                case 'fence.i':
                    codIndisponivel();
                    break;
                case 'ecall':
                    codIndisponivel();
                    break;
                case 'ebreak':
                    codIndisponivel();
                    break;
                */
                default:
                    alert('Instrução não encontrada!');
            }
        } else if(['x0', 'x3','x4'].includes(rd)){
            alert('Não é possível salvar no rd');
        } else {
            alert('Comando inválido');
        }
    }
    baseInstruction(instrucao=String, rd='', param=[String]){
        let instru = '', checkParam=true;
        rd = parametrizar(rd);
        for(let i=0; i<param.length; i++){
            param[i] = parametrizar(param[i]);
        }
        for(let i=0; i<param.length; i++){
            if(param[i] === ''){
                checkParam = false;
                break;
            }
        }
        if(rd !== '' && checkParam){
            switch (instrucao) {
                case 'lui':
                    if(isNaN(parseInt(rd)) && !isNaN(parseInt(param[0]))) {
                        instru = inst_lui(parseInt(rd.slice(1)), parseInt(param[0]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'auipc':
                    if(isNaN(parseInt(rd)) && !isNaN(parseInt(param[0]))) {
                        instru = inst_auipc(parseInt(rd.slice(1)), parseInt(param[0]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'jal':
                    if(isNaN(parseInt(rd)) && !isNaN(parseInt(param[0]))) {
                        instru = inst_jal(parseInt(rd.slice(1)), parseInt(param[0]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'jalr':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        instru = inst_jalr(parseInt(rd.slice(1)),parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'beq':
                    if(!isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        instru = inst_beq(parseInt(rd), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'bne':
                    if(!isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        instru = inst_bne(parseInt(rd), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'blt':
                    if(!isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        instru = inst_blt(parseInt(rd), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'bge':
                    if(!isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        instru = inst_bge(parseInt(rd), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'bltu':
                    if(!isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        instru = inst_bltu(parseInt(rd), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'bgeu':
                    if(!isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        instru = inst_bgeu(parseInt(rd), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'lb':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        instru = inst_lb(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'lh':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        instru = inst_lh(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'lw':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        instru = inst_lw(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'lbu':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        instru = inst_lbu(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'lhu':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        instru = inst_lhu(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'sb':
                    if(!isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        instru = inst_sb(parseInt(rd), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'sh':
                    if(!isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        instru = inst_sh(parseInt(rd), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'sw':
                    if(!isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        instru = inst_sw(parseInt(rd), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;            
                case 'addi':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        instru = inst_addi(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'slti':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        instru = inst_slti(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'sltiu':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        instru = inst_sltiu(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'xori':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        instru = inst_xori(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'ori':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        instru = inst_ori(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'andi':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        instru = inst_andi(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'slli':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        instru = inst_slli(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'srli':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        instru = inst_srli(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'srai':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && !isNaN(parseInt(param[1]))) {
                        instru = inst_srai(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1]));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'add':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        instru = inst_add(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'sub':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        instru = inst_sub(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'sll':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        instru = inst_sll(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'slt':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        instru = inst_slt(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'sltu':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        instru = inst_sltu(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'xor':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        instru = inst_xor(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'srl':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        instru = inst_srl(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'sra':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        instru = inst_sra(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'or':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        instru = inst_or(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'and':
                    if(isNaN(parseInt(rd)) && isNaN(parseInt(param[0])) && isNaN(parseInt(param[1]))) {
                        instru = inst_and(parseInt(rd.slice(1)), parseInt(param[0].slice(1)), parseInt(param[1].slice(1)));
                    } else {
                        alert('Comando inválido');
                    }
                    break;
                case 'fence':
                    instru = inst_fence(rd, param[0]);
                    break;
                case 'fence.i':
                    instru = '0000'+'0000'+'0000'+'00000'+'001'+'00000'+opCode[1];
                    break;
                case 'ecall':
                    instru = '000000000000'+'00000'+'000'+'00000'+opCode[10];
                    break;
                case 'ebreak':
                    instru = '000000000001'+'00000'+'000'+'00000'+opCode[10];
                    break;
                default:
                    alert('Instrução não encontrada!');
            }
        }
        return instru;
    }
}

const codIndisponivel = () => {
    alert('codigo ainda nao implementado!');
}
const parametrizar = (element) => {
    if(typeof element === 'string' && isNaN(parseInt(element))){
        if(element[0] !== 'x'){
            let increment = 0;
            switch (element) {
                case 'zero':
                    element = 'x0';
                    break;
                case 'ra':
                    element = 'x1';
                    break;
                case 'sp':
                    element = 'x2';
                    break;
                case 'gp':
                    element = 'x3';
                    break;
                case 'tp':
                    element = 'x4';
                    break;
                case ('s0'||'fp'):
                    element = 'x8';
                    break;
                case 's1':
                    element = 'x9'
                    break;
                case (element[0] === 't' && (parseInt(element.slice(1))>=0 && parseInt(element.slice(1))<=6)):
                    if(parseInt(element.slice(1))>=0 && parseInt(element.slice(1))>=2){
                        increment = parseInt(element.slice(1));
                        increment += 5;
                    } else {
                        increment += 25;
                    }
                    element = 'x'+increment;
                    break;
                case (element[0] === 'a' && (parseInt(element.slice(1))>=0 && parseInt(element.slice(1))<=7)):
                    increment = 10+parseInt(element.slice(1));
                    element = 'x'+increment;
                    break;
                case (element[0] === 's' && (parseInt(element.slice(1))>=2 && parseInt(element.slice(1))<=11)):
                    increment = 16 + parseInt(element.slice(1));
                    element = 'x'+increment;
                    break;
                default:
                    alert('ABI Name desconhecido!');
                    element = '';
            }
        }
    } 
    return element;
}
