/*
DECLARAÇÃO SWITCH-CASE

SWITCH (EXPRESSÃO) {
    CASE 1:
        BLOCO DE CÓDIGO
    BREAK;

    CASE 2:
        BLOCO DE CÓDIGO
    BREAK;

    DEFAULT:
        BLOCO DE CÓDIGO
}
*/

let dataHoje = new Date();

// CONST PARA MOSTRAR QUAL DIA DO MÊS É
const data = new Date();

console.log(data.toLocaleDateString());

// SWITCH PARA MOSTRAR QUAL DIA DA SEMANA É
switch (dataHoje.getDay()) {
    case 0:
        console.log('Hoje é domingo!');
        break;

    case 1:
        console.log('Hoje é segunda-feira!');
        break;

    case 2:
        console.log('Hoje é terça-feira!');
        break;
    
    case 3:
        console.log('Hoje é quarta-feira!');
        break;

    case 4:
        console.log('Hoje é quinta-feira!');
        break;
    
    case 5:
        console.log('Hoje é sexta-feira!');
        break;

    default:
        console.log('Hoje é sábado!');
}

