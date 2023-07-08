/*
LAÇO WHILE --> condição será testada no inicio de cada loop

    while (condição) {
        código a ser executado
    } 

Ordem decrescente 
*/

console.log('Ordem decrescente');

let y = 10;

while (y >= 1) {
    console.log(`Número: ${y}`);
    y--; // -1
}


/* 
LAÇO DO-WHILE --> sempre será executado 1 vez

    do (faça) {
        código a ser executado
    } while (enquanto) (condição);
*/

console.log('\nOrdem crescente');

let z = 1;

do {
    console.log(`Número: ${z}`);
    z++ // +1
} while (z <= 10);


//     EXEMPLO DE TABUADA

tabuada = 8;
i = 0;
console.log(`\nTabuada do número ${tabuada}`);

/* USANDO O WHILE
       while (i <= 10) {
            total = i * tabuada;
            console.log(`${tabuada} x ${i} = ${total}`);
            i++;
       }
*/     

//     USANDO O DO WHILE
do {
    total = i * tabuada;
    console.log(`${tabuada} x ${i} = ${total}`);
    i++;
} while (i <= 10)
