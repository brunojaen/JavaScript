function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function calssificarIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade Grave';
    } 
}

(function main() {
    const peso = 58;
    const altura = 1.79;

    const imc = calcularIMC(peso, altura);
    console.log(calssificarIMC(imc));
})();
