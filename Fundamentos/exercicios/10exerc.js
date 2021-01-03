function simboloMais(qt) {
    let resultado = "Insira quantidade";
    if (!qt) return resultado;
    
    resultado = "";

    for (let i = 0; i < qt; i++) resultado += "+";
    return resultado;
}

console.log(simboloMais(2));
console.log(simboloMais(4));
console.log(simboloMais());