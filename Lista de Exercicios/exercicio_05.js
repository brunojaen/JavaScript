
function aplicarDesconto(precoEtiqueta, formaDePagamento){ 
    if (formaDePagamento === 1) {
        console.log(precoEtiqueta - (precoEtiqueta * 0.1));
    } else if (formaDePagamento === 2) {
        console.log(precoEtiqueta - (precoEtiqueta * 0.15));
    } else if (formaDePagamento === 3) {
        console.log(precoEtiqueta)
    } else {
        console.log(precoEtiqueta + (precoEtiqueta * 0.1));
    }
}

aplicarDesconto(100, 1);

function valorDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

valorDesconto(100, 10);