function escreverMeuNome(nome) {
    return `Meu nome é ` + nome;
}


function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escreverMeuNome('Bruno') + ' e sou maior de Idade');
    } else {
        console.log('Menor');
    }
}

verificarIdade(19);