// Variáveis

const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distancia = 100;

// Cálculo

const gastoCombustivel = distancia / kmPorLitros;
const valorGasto = gastoCombustivel * precoCombustivel;

// Resultado

console.log('O valor gasto na viagem será: ' + valorGasto.toFixed(2) + ' reais');