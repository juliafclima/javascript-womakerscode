// FOREACH() - LISTA UM ARRAY

let cores = [' 0 Amarelo', ' 1 Azul', ' 2 Verde'];

console.log(`MÉTODO .FOREACH()\nElementos: ${cores}\nLista:`);

cores.forEach((listaCores) => { // .FOREACH()
    console.log(listaCores);
})

// MAP() - EXECUTA UMA FUNÇÃO

console.log('\nMÉTODO .MAP()');

let salgados = [
    {salgado: 'Bolinha de queijo', preco: 2.50},
    {salgado: 'Coxinha', preco: 3.50},
    {salgado: 'Risole de carne', preco: 2.20}
];

console.log('Mapeamento dos salgados: ');
const salgado = salgados.map((item) => { // .MAP()
    console.log(`Salgado: ${item.salgado}`);
})

console.log('Mapeamento dos preços:');
const preco = salgados.map((item) => { // .MAP()
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

moveis.forEach((listaMoveis) => { // .FOREACH()
    console.log(listaMoveis);
});

const comprarMoveis = moveis.filter(movel => movel.preco >= 1000); // .FILTER()

console.log('Móveis que custam mais de R$1.000,00:');
console.log(comprarMoveis);

// REDUCE() - EXECUTA E REDUZ A UMA ÚNICA INFORMAÇÃO

let reais = [27.86, 71.95, 36.05];

console.log(`\nMÉTODO .REDUCE()\nValores: R$${reais.join(' + ')}`); // .JOIN()

let somarValores = reais.reduce((total, valor) => { // .REDUCE()
    return total + valor;
});

console.log(`A soma dos valores é R$${somarValores}`);

// EVERY() - TESTE LÓGICO PARA SABER SE TODOS OS ITENS SÃO TRUE/FALSE

console.log(`\nMÉTODO .EVERY()\nJogos:`);

let jogos = [
    {jogo: ' 0 The Last of Us', preco: 199.90}, 
    {jogo: ' 1 Uncharted', preco: 59.99}, 
    {jogo: ' 2 Tomb Raider', preco: 29.90},
    {jogo: ' 3 Crash Bandicoot 4', preco: 149.99}
];

jogos.forEach((listaJogos) => { // .FOREACH()
    console.log(listaJogos);
});

const produtoBarato = 100;
const promoJogo = jogos.every(jogo => jogo.preco >= produtoBarato); // .EVERY()

console.log(`Todos os jogos estão por menos de R$${produtoBarato}? ${promoJogo}`);

// SOME() - TESTE LÓGICO PARA SABER SE PELO MENOS UM ITEM É TRUE/FALSE

console.log('\nMÉTODO .SOME()');

let superHerois = [
    {boneco: ' 0 Capitã Marvel', preco: 890.99}, 
    {boneco: ' 1 She-Hulk', preco: 499.89}, 
    {boneco: ' 2 Homem Aranha', preco: 949.79},
    {boneco: ' 3 Homem de ferro', preco: 1009.99}
];

superHerois.forEach((listaSuperHerois) => { // .FOREACH()
    console.log(listaSuperHerois);
});

const produtoCaro = 900;
const superHeroiCaro = superHerois.some(superHeroi => superHeroi.preco >= produtoCaro); // .SOME()

console.log(`Existe algum produto que seja mais caro que R$${produtoCaro}? ${superHeroiCaro}`);

// FIND() - ENCONTRA O PRIMEIRO VALOR SOLICITADO

console.log('\nMÉTODO .FIND()');

let acessorios = [
    {produto: ' 2 Beijamin', preco: 5.99, setor: 'utilidades'},
    {produto: ' 0 Fone de ouvido', preço: 19.90, setor: 'acessorio'}, 
    {produto: ' 1 Capa de celular', preco: 35.99, setor: 'acessorio'}
];

acessorios.forEach((listaAcessorios) => {
    console.log(listaAcessorios);
})

const produtoAcessorio = acessorios.find(acessorio => acessorio.setor === 'acessorio');

console.log('Qual é o primeiro item do setor acessorio?');
console.log(produtoAcessorio);

// FINDINDEX() - ENCONTRA O ÚLTIMO VALOR SOLICITADO

console.log('\nMÉTODO .FINDINDEX()');

let comidas = [
    {prato: 'Strogonoff', preco: 39.90, chef: 'Julia', indice: 0},
    {prato: 'Ensopadinho de salsicha', preco: 26.99, chef: 'Vinicius', indice: 1}, {prato: 'Frango à minalesa', preco: 14.90, chef: 'Marcos', indice: 2},
    {prato: 'Bifé à cavala', preco: 19.99, chef: 'Julia', indice: 3}
];

comidas.forEach((listaComidas) => {
    console.log(listaComidas);
})

const chef = 'Marcos'
const qualChef = comidas.findIndex(comida => comida.chef === 'Marcos');

console.log(`Qual é o primeiro indice encontrado do chef ${chef}?`);
console.log(qualChef);
