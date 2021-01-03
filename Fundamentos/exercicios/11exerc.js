function receberPrimeiroEUltimoElemento(array) {
    let resultado = [];
    resultado.push(array.shift());
    resultado.push(array.pop());
    return resultado;
}

console.log(receberPrimeiroEUltimoElemento([7, 14, "olá"]));
console.log(receberPrimeiroEUltimoElemento([-199, -20, "aplicativo", 16]));