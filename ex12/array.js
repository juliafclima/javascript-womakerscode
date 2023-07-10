// POP() - REMOVE O ÚLTIMO ELEMENTO

let eletrodomesticos = [' 0 Televisão', ' 1 Geladeira', ' 2 Fogão'];

console.log(`MÉTODO .POP()\nElementos: ${eletrodomesticos}`);
console.log(`Último elemento: ${eletrodomesticos.pop()}`);
console.log(`Com o .pop: ${eletrodomesticos}\n`);

// PUSH() - ADICIONA UM NOVO ELEMENTO NO FINAL DO ARRAY

let frutas = [' 0 Maçã', ' 1 Pera', ' 2 Laranja'];

console.log(`MÉTODO .PUSH()\nElementos: ${frutas}`);
console.log(frutas.push(' 3 Melancia'));
console.log(`Com o .push: ${frutas}\n`); 

// SHIFT() - REMOVE O PRIMEIRO ELEMENTO

let animais = [' 0 Girafa', ' 1 Elefante', ' 2 Leão'];

console.log(`MÉTODO .SHIFT()\nElementos: ${animais}`);
console.log(`Primeiro elemento: ${animais.shift()}`);
console.log(`Com o .shift: ${animais}\n`);


// UNSHIFT() - ADICIONA UM NOVO ELEMENTO NO INICIO DO ARRAY

let numeros = [' 1 Segundo', ' 2 Terceiro', ' 3 Quarto'];

console.log(`MÉTODO .UNSHIFT()\nElementos: ${numeros}`);
console.log(numeros.unshift(' 0 Primeiro'));
console.log(`Com o .unshift: ${numeros}\n`);

// JOIN() - UNI OS ARRAY COM UM SEPARADOR

let materias = [' 0 Matematica', ' 1 Geografia', ' 2 Português'];

console.log(`MÉTODO .JOIN()\nElementos: ${materias}`);
console.log(`Com o .join: ${materias.join(' - ')}\n`);

// SLICE() - DIVIDE UMA PARTE DE UM ARRAY EM UM NOVO ARRAY

let doces = [' 0 Cocada', ' 1 Brigadeiro', ' 2 Queijadinha', ' 3 Beijinho', ' 4 Goiabada'];

console.log(`MÉTODO .SLICE()\nElementos: ${doces}`);
console.log(`Com o .slice: ${doces.slice(2,4)}\n`);

// CONCAT() - CONCATENA DOIS ARRAYS

let array_1 = [1, 2, 3, 4, 5];
let array_2 = [6, 7, 8, 9, 10];

console.log(`MÉTODO .CONCAT()\nConjunto 1: ${array_1}\nConjunto 2: ${array_2}`);

let conjuntoNumerico = array_1.concat(array_2);

console.log(`Com o .concat: ${conjuntoNumerico}\n`);


// LENGTH - CONTA QUANTOS ELEMENTOS EXISTEM

let cervejas = [' 1 Imperio', ' 2 Brahma', ' 3 Heineken'];

console.log(`MÉTODO .LENGTH\nElementos: ${cervejas}`);
console.log(`Qnt de elementos com o .length: ${cervejas.length}x\n`);


// INDEXOF() - MOSTRA A POSIÇÃO DO PRIMEIRO ELEMENTO PROCURADO, -1 QUANDO NÃO ACHA NADA

let carnes = [' 0 Alcatra', ' 1 Contra-filé', ' 2 Patinho'];
let posicaoCarne = carnes.indexOf(' 2 Patinho');


console.log(`MÉTODO .INDEXOF()\nElementos: ${carnes}`);
console.log(`Posição com o .indexOf: ${posicaoCarne}\n`);

// LASTINDEXOF() - MOSTRA A POSIÇÃO DO ÚLTIMO ELEMENTO PROCURADO, -1 QUANDO NÃO ACHA NADA

let frase = 'lastIndexOf'
let posicaoFrase = frase.lastIndexOf('Of')

console.log(`MÉTODO .LASTINDEXOF()\nFrase: ${frase}`);
console.log(`Of em lastIndexOf está no indice: ${posicaoFrase}\n`);
