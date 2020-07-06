const verificaNum = (numero) => {
  if (numero % 3 == 0) {
    return true
  }
  return false
}

console.log('72', verificaNum(72))
console.log('3', verificaNum(3))
console.log('4', verificaNum(4))
console.log('150', verificaNum(150))
console.log('5', verificaNum(5))
console.log('6', verificaNum(6))