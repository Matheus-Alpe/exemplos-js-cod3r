//criando arrays de formas diferentes
const valores = [7.7, 2, 10.3, 3.5]; //array é heterogênio
console.log(valores[0], valores[3]);
console.log(valores[4]);
valores[4] = 10;
console.log(valores[4]);
valores[5] = 2.2;
console.log(valores);
console.log(valores.length);//traz a quantidade de itens no array
valores.push({id: 3}, false, null, 'teste');//adiciona novo itens e mostrando heterogenidade do array
console.log(valores);
console.log(valores.pop());//retira item no ultimo indice e retorna o item
delete valores[0];//retira item com indice selecionado do array
console.log(valores);
console.log(typeof valores);

const cliente = [
  {
    nome: 'Matheus Alves',
    idade: 24
  }
]
cliente.push(
  {
    nome: 'Marcos Pereira',
    idade: 31
  },
  {
    nome: 'Rosana',
    idade: 55
  }
)
console.log(cliente);
console.log(cliente[1]);
