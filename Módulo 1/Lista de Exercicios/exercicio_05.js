
function main() {

    function valorDesconto(valor, desconto) {
        return (valor - (valor * (desconto / 100)));
    }

    function valorJuros(valor, juros) {
        return (valor + (valor * (juros / 100)));
    }

    const precoEtiqueta = 100;
    const formaDePagamento = 1;

    if (formaDePagamento === 1) {
        console.log(valorDesconto(precoEtiqueta, 10));
    } else if (formaDePagamento === 2) {
        console.log(valorDesconto(precoEtiqueta, 15));
    } else if (formaDePagamento === 3) {
        console.log(precoEtiqueta)
    } else {
        console.log(valorJuros(precoEtiqueta, 10));
    }
}

main();



function calcularMedia(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
}

console.log(calcularMedia(5, 5));