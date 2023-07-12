// OBJETOS EM JAVASCRIPT

let objeto = {}; // OBJETO VAZIO

let pessoa = 'Júlia';

objeto[pessoa] = 'Isso é uma pessoa'; 

objeto[1+1+1] = 'Três'; // OU objeto[3] = 'Três';

/*
QUANDO USAR O BRACKET []

console.log(objeto.3); -> ERRO DE SINTAXE! Com NÚMERICO precisa usar o [] (colchetes)
*/

console.log('0 ' + objeto[3] + '\n'); // = Três
console.log('1 ' + objeto[1 + 1 + 1] + '\n'); // = Três

console.log('2 ' + objeto[pessoa] + '\n'); // = 'Isso é uma pessoa';
console.log('3 ' + objeto['Júlia'] + '\n'); // = 'Isso é uma pessoa';

console.log('4 ' + objeto.pessoa + '\n'); // = undefined! Não consegue resgatar as própriedades do objeto

/*
QUANDO USAR O DOT . 
*/
const Pessoa = {
    nome: 'Julia',
    sobrenome: 'Lima',
    idade: 21,
    cor: 'Branca'
};

//listarSobrenome = Pessoa.sobrenome;
listarSobrenome = Pessoa['sobrenome']

console.log(Pessoa);
console.log(listarSobrenome);


