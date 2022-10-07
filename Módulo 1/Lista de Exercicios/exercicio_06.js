/* 
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustivel por KM rodado.
Crie um método que dado a quantidade de KM e o preço do combustivel nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Prata', (1 / 12).toFixed(2));
const palio = new Carro('Fiat', 'Preto', (1 / 10).toFixed(2));

console.log(uno, palio);
console.log(uno.calcularGastoDePercurso(70, 5).toFixed(2));
console.log(palio.calcularGastoDePercurso(70, 5).toFixed(2));
