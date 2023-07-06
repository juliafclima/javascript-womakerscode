// USO DE VARIAVEIS

// 1 FORMA - VAR
// SE PRECISA USAR UMA VARIAVEL DE FORMA ISOLADA
var num1 = 10;
var num2 = 20;

var total = num1 + num2;
console.log(total + '\n'); // RESULTADO QUE APARECERA NO TERMINAL

// 2 FORMA - LET
// SE PRECISA REPLICAR UMA VÁRIAVEL, USA O LET DENTRO DE UM BLOCO/ESCORPO 
let saudacao = "Ola, programadoras!";

if (true) { 
    let saudacao = "Quero aprender JavaScript"; 
    console.log(saudacao)
}

console.log(saudacao + '\n');

// 3 FORMA - CONST
// SE PRECISA REPLICAR UMA VÁRIAVEL E VOCÊ NÃO QUER REATRIBUIR VALOR A ELA
const cidade = "Rio de Janeiro"; 

function estado() {
    const cidade = "São Paulo";
    console.log(cidade);
}

estado(); 
console.log(cidade);