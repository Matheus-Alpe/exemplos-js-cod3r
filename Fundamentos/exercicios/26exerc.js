function removerVogais(frase) {
    return frase.replace(/(a|e|i|o|u|á|é|í|ú)/gi, '')
}


console.log(removerVogais("Cod3r"));
console.log(removerVogais("Fundáamentos"));
