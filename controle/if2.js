function teste1(num) {
  if(num > 7) //sem ausência de bloco chave
    console.log(num)
  console.log("Final") //sempre vai executar pois está fora do bloco 'if'
}

teste1(7)
teste1(7.1)

function teste2(num) {
  if (num > 7); { // ';' delimitou o fim do bloco 'if', tomar cuidado com ';'
    console.log(num) //logo esse comando sempre executa
  }
}

teste2(6)
teste2(8)