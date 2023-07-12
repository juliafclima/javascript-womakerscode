// FOREACH() - LISTA UM ARRAY

let cores = [' 0 Amarelo', ' 1 Azul', ' 2 Verde'];

console.log(`MÉTODO .FOREACH()\nElementos: ${cores}\nLista:`);

cores.forEach((listaCores) => {
    console.log(listaCores);
})

// MAP() - EXECUTA UMA FUNÇÃO

console.log('\nMÉTODO .MAP()');

let salgados = [
    {salgado: 'Bolinha de queijo', preco: 2.50},
    {salgado: 'Coxinha', preco: 3.50},
    {salgado: 'Risole de carne', preco: 2.20}
];

const salgado = salgados.map((item) => {
    console.log(`Salgado: ${item.salgado}`);
})

const preco = salgados.map((item) => {
    console.log(`Preço: R$${item.preco}`);
})

// FILTER() - FILTRA UMA INFORMAÇÃO 

console.log('\nMÉTODO .FILTER()');

let moveis = [
    {movel: 'Estante', preco: 900},
    {movel: 'Sófa', preco: 2400},
    {movel: 'Cama', preco: 7200},
    {movel: 'Mesa de cabiceira', preco: 680},
    {movel: 'Mesa de jantar', preco: 1390}
];

const comprarMoveis = moveis.filter(movel => movel.preco >= 1000);

console.log('Móveis que custam mais de R$1.000,00\n');
console.log(comprarMoveis);

// REDUCE() - EXECUTA E REDUZ A UMA ÚNICA INFORMAÇÃO

let reais = [27.86, 71.05, 36.97];

console.log(`\nMÉTODO .REDUCE()\nValores: R$${reais.join(' + ')}`);

let somarValores = reais.reduce((total, valor) => {
    return total + valor;
});

console.log(`A soma dos valores é R$${somarValores}`);

// EVERY()

console.log('\nMÉTODO .EVERY()');

let superHerois = [' 0 Capitã Marvel', ' 1 She-Hulk', ' 2 Homem Aranha'];

// SOME()

console.log('\nMÉTODO .SOME()');

let jogos = [' 0 The Last of Us', ' 1 Uncharted', ' 2 Tomb Raider']

// FIND()

console.log('\nMÉTODO .FIND()');

let acessorios = [' 0 Fone de ouvido', ' 1 Capa de celular', ' 2 Beijamin'];

// FINDINDEX()

console.log('\nMÉTODO .FINDINDEX()');

let comidas = [' 0 Strogonoff', ' 1 Ensopadinho de salsicha', ' 2 Frango à minalesa'];
