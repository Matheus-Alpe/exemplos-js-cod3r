function contarCaractere(letra, frase) {
    const letrasDaFrase = [...frase];
    let qtVezes = 0;
    letrasDaFrase.forEach(elemento => {
        if (elemento === letra) qtVezes++;
    });
    return qtVezes
}

console.log(contarCaractere("r", "A sorte favorece os audazes"));
console.log(contarCaractere("c", "Conhece-te a ti mesmo"));
console.log(contarCaractere("a", "A sorte favorece os audazes"));
console.log(contarCaractere("-", "Conhece-te a ti mesmo"));
console.log(contarCaractere("A", "A sorte favorece os audazes"));