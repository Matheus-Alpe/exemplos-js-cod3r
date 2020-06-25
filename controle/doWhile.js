function valorAleatorio(min, max){
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao

do { //do while, executa antes, dps verifica se continua no loop
  opcao = valorAleatorio(0, 20)
  console.log(`Opção: ${opcao}`)
} while (opcao != 0)

console.log('Fim do loop!')