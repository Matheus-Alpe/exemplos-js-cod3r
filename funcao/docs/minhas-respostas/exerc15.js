function compraVeiculo(veiculo) {
  switch(veiculo.toLowerCase()){
    case 'hatch':
      return 'Compra efetuada com sucesso'
    case 'sedan': case 'motocicleta': case 'caminhonete':
      return 'Tem certeza que não prefere este modelo?' 
    default:
      return 'Não trabalhamos com este tipo de automóvel aqui.'
  }
}

console.log(compraVeiculo('hatch'))
console.log(compraVeiculo('sedan'))
console.log(compraVeiculo('motocicleta'))
console.log(compraVeiculo('caminhonete'))
console.log(compraVeiculo('navio'))