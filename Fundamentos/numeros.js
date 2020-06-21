const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); //verifiação se é inteiro
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
const mediaFixed = (total / (peso1 + peso2)).toFixed(2)
//toFixed() define a quantidade de casas decimais

console.log(media);
console.log(mediaFixed, "<- Valor ja fixado com o método toFixed()");
console.log(media.toString(2)); //converte numero em binário passando valor 2 no toString()
console.log(typeof media);
console.log(typeof Number);



// outro exemplo

var nota = 10;
console.log(Math.pow(nota, 2));//100
console.log(nota.toFixed(2));//10.00
console.log(nota.toPrecision(1));//1e+1
console.log(nota.toString());//"10"
console.log(nota.valueOf());//10

