// FORMAS DE CRIAR OBJETOS
/*
  json != objeto js
*/
const prod1 = {} //chaves indica que é um objeto, ao msm tempo que [] -> significa array
//atributos podem ser colocados no objeto msm dps de criado
prod1.nome = 'Celular Ultra Mega' //atributo nome foi criado dinamicamente
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1);

const prod2 = { //criando objeto com atributos
  nome: 'Camisa Polo',
  preco: 79.90, 
}

console.log(prod2);

const testObj = {//objeto podem ter outros objetos dentro dele
  //nomes de objetos podem repetir se tforem unicos do escopo
  obj: { //<- objeto
    blabla: 1,
    obj: { //<- objeto
      lele: 2
    }
  }
}
console.log(testObj);
