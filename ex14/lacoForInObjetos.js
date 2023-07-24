// LAÇO FOR.. IN

let pessoa = {
    nome: 'Júlia',
    sobrenome: 'Lima',
    corFavorita: 'azul',
    funcao: 'Desenvolvedora',
    ativo: true
};

// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);
// console.log(pessoa.corFavorita);
// console.log(pessoa.funcao);
// console.log(pessoa.ativo);

for (let listaPessoa in pessoa) {
    console.log(pessoa[listaPessoa]);
} // varre todos os dados do objeto
