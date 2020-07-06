function isBissexto(ano) {
  if (ano <= 0) {
    return false
  } else if (ano % 400 == 0) {
    return true
  } else if (ano % 100 == 0) {
    return true
  } else if (ano % 40 == 0) {
    return true
  } else {
    return false
  }
}

console.log(isBissexto(0))
console.log(isBissexto(4))
console.log(isBissexto(100))
console.log(isBissexto(400))
console.log(isBissexto(800))
console.log(isBissexto(2020))
console.log(isBissexto(2021))