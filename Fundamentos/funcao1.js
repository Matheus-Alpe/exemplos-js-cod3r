//Função sem retorno
console.log('Sem retorno:');

function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3) //5
imprimirSoma(2) //NaN = not a number
imprimirSoma(2, 13, 4, 5, 6, 7, 8) //15  - soma somente os dois primeiros, como especificado no parametro da func
imprimirSoma() //Nan 

// Função com retorno
console.log('Com retorno:');

function soma(a, b = 0) { // b = 0, é definido um valor padrão
  return a + b
}

console.log(soma(2));
console.log(soma(2, 3));
console.log(soma()); //NaN
