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