function recerberMelhorEstudante(estudantes) {
    const media = Object.entries(estudantes).map(([aluno, notas]) => {
        return {
            nome: aluno,
            media: (notas.reduce((total, atual) => total + atual) / notas.length)
        }
    })

    return media.reduce((total, aluno) => {
        if (aluno.media > total.media) return aluno;
        return total;
    }, { media: 0 });
}

console.log("Maior nota é",
    recerberMelhorEstudante({
        Joao: [8, 7.6, 8.9, 6],
        Mariana: [9, 6.6, 7.9, 8],
        Carla: [7, 7, 8, 9]
    })
)