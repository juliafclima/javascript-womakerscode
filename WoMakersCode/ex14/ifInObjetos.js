// LAÇO IF... IN

let pessoa = {
    nome: 'Júlia',
    sobrenome: 'Lima',
    corFavorita: 'azul',
    funcao: 'Desenvolvedora',
    ativo: true
};

if ('sobremesaFavorita' in pessoa) {
    console.log('Existe a key sobremesaFavorita no objeto pessoa!'); 
} else {
    console.log('Não existe a key sobremesaFavorita no objeto pessoa!');
}

if ('corFavorita' in pessoa) {
    console.log('Existe a key corFavorita no objeto pessoa!'); 
} else {
    console.log('Não existe a key corFavorita no objeto pessoa!');
}