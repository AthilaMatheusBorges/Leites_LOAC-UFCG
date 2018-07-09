const opCode = ['0000011', '0001111', '0010011', '0010111', '0100011', '0110011', '0110111', '1100011', '1100111', '1101111', '1110011']
const reg = new WeakMap()
const inicializar = () => {
  let array = {}
  for (let i = 0; i < 32; i++) {
    array[('x' + i)] = 0
  }
  return array
}
const __lui = (rd = String, offset = String, rs2 = String) => {
  codIndisponivel()
}
const __auipc = (rd = String, offset = String, rs2 = String) => {
  codIndisponivel()
}
const __jal = (rd = String, rs1 = String, rs2 = String) => {
  codIndisponivel()
}
const __jalr = (rd = String, offset = String, rs2 = String) => {
  codIndisponivel()
}
const __beq = (rs1 = String, rs2 = String, cst = String) => {
  codIndisponivel()
}
const __bne = (rs1 = String, rs2 = String, cst = String) => {
  codIndisponivel()
}
const __blt = (rs1 = String, rs2 = String, cst = String) => {
  codIndisponivel()
}
const __bge = (rs1 = String, rs2 = String, cst = String) => {
  codIndisponivel()
}
const __bltu = (rs1 = String, rs2 = String, cst = String) => {
  codIndisponivel()
}
const __bgeu = (rs1 = String, rs2 = String, cst = String) => {
  codIndisponivel()
}
const __lb = (rd = String, rs2 = String, cst = String) => {
  codIndisponivel()
}
const __lh = (rd = String, rs1 = String, cst = String) => {
  codIndisponivel()
}
const __lw = (rd = String, rs1 = String, cst = String) => {
  codIndisponivel()
}
const __lbu = (rd = String, rs1 = String, cst = String) => {
  codIndisponivel()
}
const __lhu = (rd = String, rs1 = String, cst = String) => {
  codIndisponivel()
}
const __sb = (rs1 = String, rs2 = String, cst = String) => {
  codIndisponivel()
}
const __sh = (rs1 = String, rs2 = String, cst = String) => {
  codIndisponivel()
}
const __sw = (rs1 = String, rs2 = String, cst = String) => {
  codIndisponivel()
}
const __slti = (rd = String, rs1 = String, cst = Number) => {
  // falta entender a instrucao
  codIndisponivel()
}
const __sltiu = (rd = String, rs1 = String, cst = Number) => {
  // falta entender a instrucao
  codIndisponivel()
}
const __xori = (rd = String, rs1 = String, cst = Number) => {
  // falta entender a instrucao
  codIndisponivel()
}
const __ori = (rd = String, rs1 = String, cst = Number) => {
  // falta entender a instrucao
  codIndisponivel()
}
const __andi = (rd = String, rs1 = String, cst = Number) => {
  // falta entender a instrucao
  codIndisponivel()
}
const __slli = (rd = String, rs1 = String, shamt = Number) => {
  // falta entender a instrucao
  codIndisponivel()
}
const __srli = (rd = String, rs1 = String, shamt = Number) => {
  // falta entender a instrucao
  codIndisponivel()
}
const __srai = (rd = String, rs1 = String, shamt = Number) => {
  // falta entender a instrucao
  codIndisponivel()
}
const __sub = (rd = String, rs1 = String, rs2 = String) => {
  // falta entender a instrucao
  codIndisponivel()
}
const __sll = (rd = String, rs1 = String, rs2 = String) => {
  // falta entender a instrucao
  codIndisponivel()
}
const __slt = (rd = String, rs1 = String, rs2 = String) => {
  // falta entender a instrucao
  codIndisponivel()
}
const __sltu = (rd = String, rs1 = String, rs2 = String) => {
  // falta entender a instrucao
  codIndisponivel()
}
const __xor = (rd = String, rs1 = String, rs2 = String) => {
  // falta entender a instrucao
  codIndisponivel()
}
const __srl = (rd = String, rs1 = String, rs2 = String) => {
  // falta entender a instrucao
  codIndisponivel()
}
const __sra = (rd = String, rs1 = String, rs2 = String) => {
  // falta entender a instrucao
  codIndisponivel()
}
const __or = (rd = String, rs1 = String, rs2 = String) => {
  // falta entender a instrucao
  codIndisponivel()
}
const __and = (rd = String, rs1 = String, rs2 = String) => {
  // falta entender a instrucao
  codIndisponivel()
}
const _lui = (rd = Number, cst = Number) => {
  let param1 = rd.toString(2)
  let param3 = cst.toString(2)
  param3 = completeLeftTo(param3, 20)
  if (cst < 0) {
    param3 = complementTwo(param3)
  }
  param1 = completeLeftTo(param1, 5)
  return param3 + param1 + opCode[6]
}
const _auipc = (rd = Number, cst = Number) => {
  let param1 = rd.toString(2); let param3 = cst.toString(2)
  param3 = completeLeftTo(param3, 20)
  if (cst < 0) {
    param3 = complementTwo(param3)
  }
  param1 = completeLeftTo(param1, 5)
  return param3 + param1 + opCode[3]
}
const _jal = (rd = Number, cst = Number) => {
  // falta entender a instrucao
  // codIndisponivel();
  let param1 = rd.toString(2); let param3 = cst.toString(2)
  param1 = completeLeftTo(param1, 5)
  param3 = completeLeftTo(param3, 20)
  if (cst < 0) {
    param3 = complementTwo(param3)
  }
  return param3.slice(19) + param3.slice(0, 10) + param3.slice(10, 11) + param3.slice(11, 19) + '000' + param1 + opCode[10]
}
const _jalr = (rd = Number, rs1 = Number, cst = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = cst.toString(2)
  param3 = completeLeftTo(param3, 12)
  if (cst < 0) {
    param3 = complementTwo(param3)
  }
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  return param3 + param2 + '000' + param1 + opCode[8]
}
const _beq = (rs1 = Number, rs2 = Number, cst = Number) => {
  // falta entender a instrucao
  // codIndisponivel();
  let param2 = rs2.toString(2); let param1 = rs1.toString(2); let param3 = cst.toString(2)
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  param3 = completeLeftTo(param3, 12)
  if (cst < 0) {
    param3 = complementTwo(param3)
  }
  return param3.slice(11) + param3.slice(4, 10) + param2 + param1 + '000' + param3.slice(0, 4) + param3.slice(10, -1) + opCode[7]
}
const _bne = (rs1 = Number, rs2 = Number, cst = Number) => {
  // falta entender a instrucao
  // codIndisponivel();
  let param2 = rs2.toString(2); let param1 = rs1.toString(2); let param3 = cst.toString(2)
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  param3 = completeLeftTo(param3, 12)
  if (cst < 0) {
    param3 = complementTwo(param3)
  }
  return param3.slice(11) + param3.slice(4, 10) + param2 + param1 + '001' + param3.slice(0, 4) + param3.slice(10, -1) + opCode[7]
}
const _blt = (rs1 = Number, rs2 = Number, cst = Number) => {
  // falta entender a instrucao
  // codIndisponivel();
  let param2 = rs2.toString(2); let param1 = rs1.toString(2); let param3 = cst.toString(2)
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  param3 = completeLeftTo(param3, 12)
  if (cst < 0) {
    param3 = complementTwo(param3)
  }
  return param3.slice(11) + param3.slice(4, 10) + param2 + param1 + '100' + param3.slice(0, 4) + param3.slice(10, -1) + opCode[7]
}
const _bge = (rs1 = Number, rs2 = Number, cst = Number) => {
  // falta entender a instrucao
  // codIndisponivel();
  let param2 = rs2.toString(2); let param1 = rs1.toString(2); let param3 = cst.toString(2)
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  param3 = completeLeftTo(param3, 12)
  if (cst < 0) {
    param3 = complementTwo(param3)
  }
  return param3.slice(11) + param3.slice(4, 10) + param2 + param1 + '101' + param3.slice(0, 4) + param3.slice(10, -1) + opCode[7]
}
const _bltu = (rs1 = Number, rs2 = Number, cst = Number) => {
  // falta entender a instrucao
  // codIndisponivel();
  let param2 = rs2.toString(2); let param1 = rs1.toString(2); let param3 = cst.toString(2)
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  param3 = completeLeftTo(param3, 12)
  if (cst < 0) {
    param3 = complementTwo(param3)
  }
  return param3.slice(11) + param3.slice(4, 10) + param2 + param1 + '110' + param3.slice(0, 4) + param3.slice(10, -1) + opCode[7]
}
const _bgeu = (rs1 = Number, rs2 = Number, cst = Number) => {
  // falta entender a instrucao
  // codIndisponivel();
  let param2 = rs2.toString(2); let param1 = rs1.toString(2); let param3 = cst.toString(2)
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  param3 = completeLeftTo(param3, 12)
  if (cst < 0) {
    param3 = complementTwo(param3)
  }
  return param3.slice(11) + param3.slice(4, 10) + param2 + param1 + '111' + param3.slice(0, 4) + param3.slice(10, -1) + opCode[7]
}
const _lb = (rd = Number, rs1 = Number, cst = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = cst.toString(2)
  param3 = completeLeftTo(param3, 12)
  if (cst < 0) {
    param3 = complementTwo(param3)
  }
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  return param3 + param2 + '000' + param1 + opCode[0]
}
const _lh = (rd = Number, rs1 = Number, cst = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = cst.toString(2)
  param3 = completeLeftTo(param3, 12)
  if (cst < 0) {
    param3 = complementTwo(param3)
  }
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  return param3 + param2 + '001' + param1 + opCode[0]
}
const _lw = (rd = Number, rs1 = Number, cst = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = cst.toString(2)
  param3 = completeLeftTo(param3, 12)
  if (cst < 0) {
    param3 = complementTwo(param3)
  }
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  return param3 + param2 + '010' + param1 + opCode[0]
}
const _lbu = (rd = Number, rs1 = Number, cst = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = cst.toString(2)
  param3 = completeLeftTo(param3, 12)
  if (cst < 0) {
    param3 = complementTwo(param3)
  }
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  return param3 + param2 + '100' + param1 + opCode[0]
}
const _lhu = (rd = Number, rs1 = Number, cst = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = cst.toString(2)
  param3 = completeLeftTo(param3, 12)
  if (cst < 0) {
    param3 = complementTwo(param3)
  }
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  return param3 + param2 + '101' + param1 + opCode[0]
}
const _sb = (rd = Number, rs1 = Number, cst = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = cst.toString(2)
  param3 = completeLeftTo(param3, 12)
  if (cst < 0) {
    param3 = complementTwo(param3)
  }
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  return param3.slice(0, 7) + param2 + param1 + '000' + param3.slice(7, 12) + opCode[4]
}
const _sh = (rd = Number, rs1 = Number, cst = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = cst.toString(2)
  param3 = completeLeftTo(param3, 12)
  if (cst < 0) {
    param3 = complementTwo(param3)
  }
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  return param3.slice(0, 7) + param2 + param1 + '001' + param3.slice(7, 12) + opCode[4]
}
const _sw = (rd = Number, rs1 = Number, cst = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = cst.toString(2)
  param3 = completeLeftTo(param3, 12)
  if (cst < 0) {
    param3 = complementTwo(param3)
  }
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  return param3.slice(0, 7) + param2 + param1 + '010' + param3.slice(7, 12) + opCode[4]
}
const _addi = (rd = Number, rs1 = Number, cst = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = cst.toString(2)
  param1 = completeLeftTo(param2, 5)
  param2 = completeLeftTo(param2, 5)
  param3 = completeLeftTo(param3, 12)
  if (cst < 0) {
    param3 = complementTwo(param3)
  }
  return param3 + param2 + '000' + param1 + opCode[2]
}
const _slti = (rd = Number, rs1 = Number, cst = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = cst.toString(2)
  param3 = completeLeftTo(param3, 12)
  if (cst < 0) {
    param3 = complementTwo(param3)
  }
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  return param3 + param2 + '010' + param1 + opCode[2]
}
const _sltiu = (rd = Number, rs1 = Number, cst = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = cst.toString(2)
  param3 = completeLeftTo(param3, 12)
  if (cst < 0) {
    param3 = complementTwo(param3)
  }
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  return param3 + param2 + '011' + param1 + opCode[2]
}
const _xori = (rd = Number, rs1 = Number, cst = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = cst.toString(2)
  param3 = completeLeftTo(param3, 12)
  if (cst < 0) {
    param3 = complementTwo(param3)
  }
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  return param3 + param2 + '100' + param1 + opCode[2]
}
const _ori = (rd = Number, rs1 = Number, cst = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = cst.toString(2)
  param3 = completeLeftTo(param3, 12)
  if (cst < 0) {
    param3 = complementTwo(param3)
  }
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  return param3 + param2 + '110' + param1 + opCode[2]
}
const _andi = (rd = Number, rs1 = Number, cst = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = cst.toString(2)
  param3 = completeLeftTo(param3, 12)
  if (cst < 0) {
    param3 = complementTwo(param3)
  }
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  return param3 + param2 + '111' + param1 + opCode[2]
}
const _slli = (rd = Number, rs1 = Number, shamt = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = shamt.toString(2)
  param3 = completeLeftTo(param3, 5)
  // verificar shamt
  if (shamt < 0) {
    param3 = complementTwo(param3)
  }
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  return '0000000' + param3 + param2 + '001' + param1 + opCode[2]
}
const _srli = (rd = Number, rs1 = Number, shamt = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = shamt.toString(2)
  param3 = completeLeftTo(param3, 5)
  // verificar shamt
  if (shamt < 0) {
    param3 = complementTwo(param3)
  }
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  return '0000000' + param3 + param2 + '101' + param1 + opCode[2]
}
const _srai = (rd = Number, rs1 = Number, shamt = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = shamt.toString(2)
  param3 = completeLeftTo(param3, 5)
  // verificar shamt
  if (shamt < 0) {
    param3 = complementTwo(param3)
  }
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  return '0100000' + param3 + param2 + '101' + param1 + opCode[2]
}
const _add = (rd = Number, rs1 = Number, rs2 = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = rs2.toString(2)
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  param3 = completeLeftTo(param3, 5)
  return '0000000' + param3 + param2 + '000' + param1 + opCode[5]
}
const _sub = (rd = Number, rs1 = Number, rs2 = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = rs2.toString(2)
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  param3 = completeLeftTo(param3, 5)
  return '0100000' + param3 + param2 + '000' + param1 + opCode[5]
}
const _sll = (rd = Number, rs1 = Number, rs2 = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = rs2.toString(2)
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  param3 = completeLeftTo(param3, 5)
  return '0000000' + param3 + param2 + '001' + param1 + opCode[5]
}
const _slt = (rd = Number, rs1 = Number, rs2 = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = rs2.toString(2)
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  param3 = completeLeftTo(param3, 5)
  return '0000000' + param3 + param2 + '010' + param1 + opCode[5]
}
const _sltu = (rd = Number, rs1 = Number, rs2 = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = rs2.toString(2)
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  param3 = completeLeftTo(param3, 5)
  return '0000000' + param3 + param2 + '011' + param1 + opCode[5]
}
const _xor = (rd = Number, rs1 = Number, rs2 = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = rs2.toString(2)
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  param3 = completeLeftTo(param3, 5)
  return '0000000' + param3 + param2 + '100' + param1 + opCode[5]
}
const _srl = (rd = Number, rs1 = Number, rs2 = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = rs2.toString(2)
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  param3 = completeLeftTo(param3, 5)
  return '0000000' + param3 + param2 + '101' + param1 + opCode[5]
}
const _sra = (rd = Number, rs1 = Number, rs2 = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = rs2.toString(2)
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  param3 = completeLeftTo(param3, 5)
  return '0100000' + param3 + param2 + '101' + param1 + opCode[5]
}
const _or = (rd = Number, rs1 = Number, rs2 = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = rs2.toString(2)
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  param3 = completeLeftTo(param3, 5)
  return '0000000' + param3 + param2 + '110' + param1 + opCode[5]
}
const _and = (rd = Number, rs1 = Number, rs2 = Number) => {
  let param1 = rd.toString(2); let param2 = rs1.toString(2); let param3 = rs2.toString(2)
  param1 = completeLeftTo(param1, 5)
  param2 = completeLeftTo(param2, 5)
  param3 = completeLeftTo(param3, 5)
  return '0000000' + param3 + param2 + '111' + param1 + opCode[5]
}
const _fence = (pred, succ) => {
  // falta entender a instrucao
  codIndisponivel()
  // opCode[1]
  // return '0000'+pred+succ+'00000'+'001'+'00000'+opCode[1];
}
export default class RiscV {
  constructor () {
    reg.set(this, inicializar())
  }
  clean () {
    reg.set(this, inicializar())
  }
  toString () {
    let string = ''
    Object.getOwnPropertyNames(reg.get(this)).forEach((element, index) => {
      string += element + '\t:\t' + (reg.get(this)[element]).toString(16)
      string += (((index + 1) % 4) ? '\t' : '\n')
    })
    return string
  }
  make (comando = [String]) {
    let [instrucao, param1, param2, param3] = formatInput(comando)
    let checkParam = true
    param1 = parametrizar(param1)
    param2 = parametrizar(param2)
    param3 = parametrizar(param3)
    if (param1 === '' || param2 === '') {
      checkParam = false
    }
    if (checkParam) {
      if (checkParam && !['x0', 'x3', 'x4'].includes(param1)) {
        switch (instrucao) {
          case 'li':
            if (isNaN(parseInt(param1)) && !isNaN(parseInt(param2))) {
              __lui(param1, parseInt(param2))
            } else {
              comandoInvalido()
            }
            break
          case 'auipc':
            if (isNaN(parseInt(param1)) && !isNaN(parseInt(param2))) {
              __auipc(param1, parseInt(param2))
            } else {
              comandoInvalido()
            }
            break
          case 'jal':
            if (isNaN(parseInt(param1)) && !isNaN(parseInt(param2))) {
              __jal(param1, parseInt(param2))
            } else {
              comandoInvalido()
            }
            break
          case 'jalr':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
              __jalr(param1, param2, parseInt(param3))
            } else {
              comandoInvalido()
            }
            break
          case 'beq':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
              __beq(param1, param3, parseInt(param2))
            } else {
              comandoInvalido()
            }
            break
          case 'bne':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
              __bne(param1, param3, parseInt(param2))
            } else {
              comandoInvalido()
            }
            break
          case 'blt':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
              __blt(param1, param3, parseInt(param2))
            } else {
              comandoInvalido()
            }
            break
          case 'bge':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
              __bge(param1, param3, parseInt(param2))
            } else {
              comandoInvalido()
            }
            break
          case 'bltu':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
              __bltu(param1, param3, parseInt(param2))
            } else {
              comandoInvalido()
            }
            break
          case 'bgeu':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
              __bgeu(param1, param3, parseInt(param2))
            } else {
              comandoInvalido()
            }
            break
          case 'lb':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
              __lb(param1, param2, parseInt(param3))
            } else {
              comandoInvalido()
            }
            break
          case 'lh':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
              __lh(param1, param2, parseInt(param3))
            } else {
              comandoInvalido()
            }
            break
          case 'lw':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
              __lw(param1, param2, parseInt(param3))
            } else {
              comandoInvalido()
            }
            break
          case 'lbu':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
              __lbu(param1, param2, parseInt(param3))
            } else {
              comandoInvalido()
            }
            break
          case 'lhu':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
              __lhu(param1, param2, parseInt(param3))
            } else {
              comandoInvalido()
            }
            break
          case 'sb':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
              __sb(param1, param3, parseInt(param2))
            } else {
              comandoInvalido()
            }
            break
          case 'sh':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
              __sh(param1, param3, parseInt(param2))
            } else {
              comandoInvalido()
            }
            break
          case 'sw':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
              __sw(param1, param3, parseInt(param2))
            } else {
              comandoInvalido()
            }
            break
          case 'addi':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
              reg.get(this)[param1] += (reg.get(this)[param2] + parseInt(param3))
            } else {
              comandoInvalido()
            }
            break
          case 'slti':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
              __slti(param1, param2, parseInt(param3))
            } else {
              comandoInvalido()
            }
            break
          case 'sltiu':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
              __sltiu(param1, param2, parseInt(param3))
            } else {
              comandoInvalido()
            }
            break
          case 'xori':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
              __xori(param1, param2, parseInt(param3))
            } else {
              comandoInvalido()
            }
            break
          case 'ori':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
              __ori(param1, param2, parseInt(param3))
            } else {
              comandoInvalido()
            }
            break
          case 'andi':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
              __andi(param1, param2, parseInt(param3))
            } else {
              comandoInvalido()
            }
            break
          case 'slli':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
              __slli(param1, param2, parseInt(param3))
            } else {
              comandoInvalido()
            }
            break
          case 'srli':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
              __srli(param1, param2, parseInt(param3))
            } else {
              comandoInvalido()
            }
            break
          case 'srai':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
              __srai(param1, param2, parseInt(param3))
            } else {
              comandoInvalido()
            }
            break
          case 'add':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && param3 !== '' && isNaN(parseInt(param3))) {
              reg.get(this)[param1] += reg.get(this)[param2] + reg.get(this)[param3]
            } else {
              comandoInvalido()
            }
            break
          case 'sub':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && param3 !== '' && isNaN(parseInt(param3))) {
              __sub(param1, param2, param3)
            } else {
              comandoInvalido()
            }
            break
          case 'sll':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && param3 !== '' && isNaN(parseInt(param3))) {
              __sll(param1, param2, param3)
            } else {
              comandoInvalido()
            }
            break
          case 'slt':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && param3 !== '' && isNaN(parseInt(param3))) {
              __slt(param1, param2, param3)
            } else {
              comandoInvalido()
            }
            break
          case 'sltu':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && param3 !== '' && isNaN(parseInt(param3))) {
              __sltu(param1, param2, param3)
            } else {
              comandoInvalido()
            }
            break
          case 'xor':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && param3 !== '' && isNaN(parseInt(param3))) {
              __xor(param1, param2, param3)
            } else {
              comandoInvalido()
            }
            break
          case 'srl':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && param3 !== '' && isNaN(parseInt(param3))) {
              __srl(param1, param2, param3)
            } else {
              comandoInvalido()
            }
            break
          case 'sra':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && param3 !== '' && isNaN(parseInt(param3))) {
              __sra(param1, param2, param3)
            } else {
              comandoInvalido()
            }
            break
          case 'or':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && param3 !== '' && isNaN(parseInt(param3))) {
              __or(param1, param2, param3)
            } else {
              comandoInvalido()
            }
            break
          case 'and':
            if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && param3 !== '' && isNaN(parseInt(param3))) {
              __and(param1, param2, param3)
            } else {
              comandoInvalido()
            }
            break/*
          case 'fence':
          __fence(param1, param2)
          break
          case 'fence.i':
          '0000' + '0000' + '0000' + '00000' + '001' + '00000' + opCode[1]
          break
          case 'ecall':
          '000000000000' + '00000' + '000' + '00000' + opCode[10]
          break
          case 'ebreak':
          '000000000001' + '00000' + '000' + '00000' + opCode[10]
          break */
          default:
            alert('Instrução não encontrada!')
            break
        }
      } else if (['x0', 'x3', 'x4'].includes(param1)) {
        alert('Não é possível salvar no rd')
      }
    } else {
      comandoInvalido()
    }
    return this.toString()
  }
  baseInstruction (comando = String) {
    let input = formatInput(comando); let instru = ''; let checkParam = true
    let [instrucao, param1, param2, param3] = [input[0], input[1], input[2], input[3]]
    param1 = parametrizar(param1)
    param2 = parametrizar(param2)
    param3 = parametrizar(param3)
    if (param1 === '' || param2 === '') {
      checkParam = false
    }
    if (checkParam) {
      switch (instrucao) {
        case 'li':
          if (isNaN(parseInt(param1)) && !isNaN(parseInt(param2))) {
            instru = _lui(parseInt(param1.slice(1)), parseInt(param2))
          } else {
            comandoInvalido()
          }
          break
        case 'auipc':
          if (isNaN(parseInt(param1)) && !isNaN(parseInt(param2))) {
            instru = _auipc(parseInt(param1.slice(1)), parseInt(param2))
          } else {
            comandoInvalido()
          }
          break
        case 'jal':
          if (isNaN(parseInt(param1)) && !isNaN(parseInt(param2))) {
            instru = _jal(parseInt(param1.slice(1)), parseInt(param2))
          } else {
            comandoInvalido()
          }
          break
        case 'jalr':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
            instru = _jalr(parseInt(param1.slice(1)), parseInt(param2.slice(1)), parseInt(param3))
          } else {
            comandoInvalido()
          }
          break
        case 'beq':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
            instru = _beq(parseInt(param1.slice(1)), parseInt(param3.slice(1)), parseInt(param2))
          } else {
            comandoInvalido()
          }
          break
        case 'bne':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
            instru = _bne(parseInt(param1.slice(1)), parseInt(param3.slice(1)), parseInt(param2))
          } else {
            comandoInvalido()
          }
          break
        case 'blt':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
            instru = _blt(parseInt(param1.slice(1)), parseInt(param3.slice(1)), parseInt(param2))
          } else {
            comandoInvalido()
          }
          break
        case 'bge':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
            instru = _bge(parseInt(param1.slice(1)), parseInt(param3.slice(1)), parseInt(param2))
          } else {
            comandoInvalido()
          }
          break
        case 'bltu':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
            instru = _bltu(parseInt(param1.slice(1)), parseInt(param3.slice(1)), parseInt(param2))
          } else {
            comandoInvalido()
          }
          break
        case 'bgeu':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
            instru = _bgeu(parseInt(param1.slice(1)), parseInt(param3.slice(1)), parseInt(param2))
          } else {
            comandoInvalido()
          }
          break
        case 'lb':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
            instru = _lb(parseInt(param1.slice(1)), parseInt(param2.slice(1)), parseInt(param3))
          } else {
            comandoInvalido()
          }
          break
        case 'lh':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
            instru = _lh(parseInt(param1.slice(1)), parseInt(param2.slice(1)), parseInt(param3))
          } else {
            comandoInvalido()
          }
          break
        case 'lw':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
            instru = _lw(parseInt(param1.slice(1)), parseInt(param2.slice(1)), parseInt(param3))
          } else {
            comandoInvalido()
          }
          break
        case 'lbu':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
            instru = _lbu(parseInt(param1.slice(1)), parseInt(param2.slice(1)), parseInt(param3))
          } else {
            comandoInvalido()
          }
          break
        case 'lhu':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
            instru = _lhu(parseInt(param1.slice(1)), parseInt(param2.slice(1)), parseInt(param3))
          } else {
            comandoInvalido()
          }
          break
        case 'sb':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
            instru = _sb(parseInt(param1.slice(1)), parseInt(param3.slice(1)), parseInt(param2))
          } else {
            comandoInvalido()
          }
          break
        case 'sh':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
            instru = _sh(parseInt(param1.slice(1)), parseInt(param3.slice(1)), parseInt(param2))
          } else {
            comandoInvalido()
          }
          break
        case 'sw':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
            instru = _sw(parseInt(param1.slice(1)), parseInt(param3.slice(1)), parseInt(param2))
          } else {
            comandoInvalido()
          }
          break
        case 'addi':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
            instru = _addi(parseInt(param1.slice(1)), parseInt(param2.slice(1)), parseInt(param3))
          } else {
            comandoInvalido()
          }
          break
        case 'slti':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
            instru = _slti(parseInt(param1.slice(1)), parseInt(param2.slice(1)), parseInt(param3))
          } else {
            comandoInvalido()
          }
          break
        case 'sltiu':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
            instru = _sltiu(parseInt(param1.slice(1)), parseInt(param2.slice(1)), parseInt(param3))
          } else {
            comandoInvalido()
          }
          break
        case 'xori':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
            instru = _xori(parseInt(param1.slice(1)), parseInt(param2.slice(1)), parseInt(param3))
          } else {
            comandoInvalido()
          }
          break
        case 'ori':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
            instru = _ori(parseInt(param1.slice(1)), parseInt(param2.slice(1)), parseInt(param3))
          } else {
            comandoInvalido()
          }
          break
        case 'andi':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
            instru = _andi(parseInt(param1.slice(1)), parseInt(param2.slice(1)), parseInt(param3))
          } else {
            comandoInvalido()
          }
          break
        case 'slli':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
            instru = _slli(parseInt(param1.slice(1)), parseInt(param2.slice(1)), parseInt(param3))
          } else {
            comandoInvalido()
          }
          break
        case 'srli':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
            instru = _srli(parseInt(param1.slice(1)), parseInt(param2.slice(1)), parseInt(param3))
          } else {
            comandoInvalido()
          }
          break
        case 'srai':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && !isNaN(parseInt(param3))) {
            instru = _srai(parseInt(param1.slice(1)), parseInt(param2.slice(1)), parseInt(param3))
          } else {
            comandoInvalido()
          }
          break
        case 'add':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && param3 !== '' && isNaN(parseInt(param3))) {
            instru = _add(parseInt(param1.slice(1)), parseInt(param2.slice(1)), parseInt(param3.slice(1)))
          } else {
            comandoInvalido()
          }
          break
        case 'sub':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && param3 !== '' && isNaN(parseInt(param3))) {
            instru = _sub(parseInt(param1.slice(1)), parseInt(param2.slice(1)), parseInt(param3.slice(1)))
          } else {
            comandoInvalido()
          }
          break
        case 'sll':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && param3 !== '' && isNaN(parseInt(param3))) {
            instru = _sll(parseInt(param1.slice(1)), parseInt(param2.slice(1)), parseInt(param3.slice(1)))
          } else {
            comandoInvalido()
          }
          break
        case 'slt':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && param3 !== '' && isNaN(parseInt(param3))) {
            instru = _slt(parseInt(param1.slice(1)), parseInt(param2.slice(1)), parseInt(param3.slice(1)))
          } else {
            comandoInvalido()
          }
          break
        case 'sltu':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && param3 !== '' && isNaN(parseInt(param3))) {
            instru = _sltu(parseInt(param1.slice(1)), parseInt(param2.slice(1)), parseInt(param3.slice(1)))
          } else {
            comandoInvalido()
          }
          break
        case 'xor':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && param3 !== '' && isNaN(parseInt(param3))) {
            instru = _xor(parseInt(param1.slice(1)), parseInt(param2.slice(1)), parseInt(param3.slice(1)))
          } else {
            comandoInvalido()
          }
          break
        case 'srl':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && param3 !== '' && isNaN(parseInt(param3))) {
            instru = _srl(parseInt(param1.slice(1)), parseInt(param2.slice(1)), parseInt(param3.slice(1)))
          } else {
            comandoInvalido()
          }
          break
        case 'sra':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && param3 !== '' && isNaN(parseInt(param3))) {
            instru = _sra(parseInt(param1.slice(1)), parseInt(param2.slice(1)), parseInt(param3.slice(1)))
          } else {
            comandoInvalido()
          }
          break
        case 'or':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && param3 !== '' && isNaN(parseInt(param3))) {
            instru = _or(parseInt(param1.slice(1)), parseInt(param2.slice(1)), parseInt(param3.slice(1)))
          } else {
            comandoInvalido()
          }
          break
        case 'and':
          if (isNaN(parseInt(param1)) && isNaN(parseInt(param2)) && param3 !== '' && isNaN(parseInt(param3))) {
            instru = _and(parseInt(param1.slice(1)), parseInt(param2.slice(1)), parseInt(param3.slice(1)))
          } else {
            comandoInvalido()
          }
          break
        case 'fence':
          instru = _fence(param1, param2)
          break
        case 'fence.i':
          instru = '0000' + '0000' + '0000' + '00000' + '001' + '00000' + opCode[1]
          break
        case 'ecall':
          instru = '000000000000' + '00000' + '000' + '00000' + opCode[10]
          break
        case 'ebreak':
          instru = '000000000001' + '00000' + '000' + '00000' + opCode[10]
          break
        default:
          alert('Instrução não encontrada!')
          break
      }
    }
    return instru
  }
}

const parametrizar = (element = '') => {
  element = element.trim()
  let param = ''
  if (!isNaN(parseInt(element)) || element[0] === 'x') {
    param = element
  } else {
    if (element[0] === '(' && element[element.length - 1] === ')') {
      element = element.replace('(', '')
      element = element.replace(')', '')
      if (element[0] === 'x') {
        param = (reg.get(this)[element]).toString(2)
      }
    } else {
      switch (element) {
        case 'zero':
          param = 'x0'
          break
        case 'ra':
          param = 'x1'
          break
        case 'sp':
          param = 'x2'
          break
        case 'gp':
          param = 'x3'
          break
        case 'tp':
          param = 'x4'
          break
        case 's0':
          param = 'x8'
          break
        case 'fp':
          param = 'x8'
          break
        case 's1':
          param = 'x9'
          break
        default:
          if (element[0] === 't') {
            if (parseInt(element.slice(1)) >= 0 && parseInt(element.slice(1)) <= 6) {
              let increment = 0
              if (parseInt(element.slice(1)) < 3) {
                increment = 5
              } else {
                increment = 25
              }
              param = 'x' + (increment + parseInt(element.slice(1)))
            }
          } else if (element[0] === 'a') {
            if (parseInt(element.slice(1)) >= 0 && parseInt(element.slice(1)) <= 7) {
              param = 'x' + (10 + parseInt(element.slice(1)))
            }
          } else if (element[0] === 's') {
            if (parseInt(element.slice(1)) >= 2 && parseInt(element.slice(1)) <= 11) {
              param = 'x' + (16 + parseInt(element.slice(1)))
            }
          } else {
            alert('ABI nao reconhecido')
          }
          break
      }
    }
  }
  return param.toLowerCase()
}
const completeLeftTo = (param = String, tam = Number) => {
  if (param[0] === '-') {
    param = param.slice(1)
  }
  for (let i = param.length; i < tam; i++) {
    param = '0' + param
  }
  return param
}
const complementTwo = (param = String) => {
  let inverter = false; let string = ''
  for (let i = param.length - 1; i >= 0; i--) {
    let atual = param[i]
    if (inverter) {
      atual = ((param[i] === '1') ? '0' : '1')
    } else {
      if (param[i] === '1') {
        inverter = true
      }
    }
    string = atual + string
  }
  return string
}
const formatInput = (comando = String) => {
  let array = []
  if (comando.split(',').length > 1) {
    comando = comando.split(',')
    comando.map(element => {
      let param = element.trim().toLowerCase()
      if (param.split(' ').length > 1) {
        (param.split(' ')).map(obj => {
          array.push(obj)
        })
      } else {
        array.push(param)
      }
    })
  } else {
    comando = comando.split(' ')
    comando.map(element => {
      if (element) {
        array.push(element.trim().toLowerCase())
      }
    })
  }
  if (array.length < 4) {
    for (let i = array.length - 1; i < 4; i++) {
      // array[i] = ''
      array.push('')
    }
  }
  return array
}
const comandoInvalido = () => {
  alert('Comando invalido')
}
const codIndisponivel = () => {
  alert('codigo ainda nao implementado!')
}
