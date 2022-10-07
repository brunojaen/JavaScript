/*
 1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre, calcule e imprime a média e a sua classificação conforme a tabela abaixo.

 media = (nota 1 + nota 2 + nota 3) / 3;

 Classificação:
 - Média menor que 5, reprovado;
 - Média entre 5 e 7, recuperação;
 - Média acima de 7, aprovado;
*/

const nota1 = 9;
const nota2 = 4;
const nota3 = 1;
const media = (nota1 + nota2 + nota3) / 3;
console.log(media.toFixed(2));

if (media < 5) {
    console.log('Reprovado');
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação');
} else {
    console.log('Aprovado');
}

