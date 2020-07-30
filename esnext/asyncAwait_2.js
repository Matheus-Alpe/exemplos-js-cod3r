function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, max] //trocando os valores

    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
        if (numerosProibidos.includes(aleatorio)) {
            console.log(`${numerosProibidos} <-> ${aleatorio}`)
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtNumeros, tentativas = 1) {
    try {
        const numeros = []
        for (let _ of Array(qtNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros

    } catch (e) {
        if (tentativas > 10) {
            throw 'Quantidade de tentativas excedidas!'
        } else {
            return gerarMegaSena(qtNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)