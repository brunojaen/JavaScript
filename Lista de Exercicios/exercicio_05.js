
function valorDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function valorJuros(valor, juros) {
    return (valor + (valor *(juros / 100)));
}

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(valorDesconto(precoEtiqueta, 10));
} else if (formaDePagamento === 2) {
    console.log(valorDesconto(precoEtiqueta, 15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta)
} else {
    console.log(valorJuros(precoEtiqueta, 10));
}