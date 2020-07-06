function aumentoSalario(plano, salario) {
  switch (plano.toLowerCase()) {
    case 'a':
      return salario * 1.1
    case 'b':
      return salario * 1.15
    case 'c':
      return salario * 1.2
    default:
      return 'Plano inválido.'
  }
}


console.log(aumentoSalario('A', 1000))
console.log(aumentoSalario('b', 1000))
console.log(aumentoSalario('C', 1000))
console.log(aumentoSalario('d', 1000))