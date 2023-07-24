//@ts-check

// OBJETOS EM JAVASCRIPT

let pessoa = {
    nome: 'Júlia',
    sobrenome: 'Lima',
    idade: 21,
    cor: 'preta',
    estado: 'Rio de janeiro'
};

console.log(pessoa);

// QUANDO USAR O DOT NOTATION . -> object.key
// CHAVE ESTÁTICA -> Chave digitada diretamente
// altera uma propriedade

pessoa.idade = 22; 

console.log(`\nTenho ${pessoa.idade} anos!`); // tenho 22 anos!

// adiciona uma propriedade

pessoa.nacionalidade = 'Brasileira'; 

console.log(`\nSou ${pessoa.nacionalidade}!`); // sou Brasileira!

// QUANDO USAR O BRACKET NOTATION [] -> object[expression]
// CHAVE DINÂMICA -> chave validada a partir de uma expressão
// altera uma propriedade

pessoa['cor'] = 'branca'

console.log(`\nMinha cor é ${pessoa['cor']}!`); // minha cor é branca!

// adiciona uma propriedade 

let cidade = 'naturalidade';

pessoa['cidade'] = 'Petrópolis';

console.log(`\nSou natural de ${pessoa['cidade']}!`);


console.log(`\nOlá, meu nome é ${pessoa.nome} ${pessoa.sobrenome}! Tenho ${pessoa.idade} anos e moro na cidade de ${pessoa['cidade']} do estado do ${pessoa.estado}, minha nacionalidade é ${pessoa.nacionalidade}. Sou ${pessoa['cor']}.\n`);

