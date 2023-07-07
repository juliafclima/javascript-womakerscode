// STRING

let nome = 'Júlia Lima';
let nomeMae = "Cristina Norma"

let frase = `\nEu me chamo ${nome} e o nome da minha mãe é ${nomeMae}!`

console.log(frase + '\n');

// NUMBER

const num1 = 4; // INTEIRO
const num2 = 3.14; // PONTO FLUTUANTE
const num3 = 3e5; // 3 * (10 ^ 5) EXPONENCIAÇÃO

console.log(num1);
console.log(num2);
console.log(num3 + '\n');

// BIGINT

const anoLuz = 9460536207068016n; //REPRESENTA PELA LETRA 'n'

console.log(anoLuz + '\n')

// BOOLEAN

let x = 5;
let y = 5;
let z = 6;

console.log(x == y);
console.log(x == z);

// UNDEFINIED - VALOR QUALQUER SEM ATRIBUIÇÃO

let meuNome; 
console.log('\n' + meuNome + '\n');

// NULL - AUSÊNCIA DE UM OBJETO

const numero = null;
console.log(numero + '\n');

// OBJECT

const estudante = {
    nome: 'Júlia',
    sobrenome: 'Lima',
    idade: 21,
    tipoCurso: 'JavaScript',
    valorCurso: null,
    ativo: true
};

console.log(estudante);









