
// Variavéis    

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distancia = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distancia / kmPorLitros;

// Condicionais

if (tipoCombustivel === 'Etanol') {
    const valorTotal = litrosConsumidos * precoEtanol;
    console.log(`O valor total a ser pago é de R$` + valorTotal.toFixed(2));
} else {
    const valorTotal = litrosConsumidos * precoGasolina;
    console.log(`O valor total a ser pago é de R$` + valorTotal.toFixed(2));
}

