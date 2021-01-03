function buscarPalavrasSemelhantes(semelhante, arrayPalavras) {
    return arrayPalavras.filter(palavra => {
        if(!palavra.indexOf(semelhante)) return palavra;
    })
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]));
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) );