// Objetos
// Assim como as arrays, os objetos também podem ter seus valores internos mutaveis. Por isso podemos alterar valores dentro desses tipos de dados, só nao podemos atribuir novamente

// Sem os objetos criariamos um grupo de pessoas com suas propriedades assim:

const nome01 = 'Nelson'; 
const sobrenome01 = 'Martins';
const idade01 = 24;

const nome02 = 'Maria'; 
const sobrenome02 = 'Eduarda';
const idade02 = 21; // ... 

// Precisariamos de varias variaveis relacionadas e enumeradas, os objetos resolvem isso:

const pessoa1 = { // com os objetos nos criamos com nome seguidos de {} e ai colocamos todos os atributos do objeto com o nome do atributo seguido de de dois pontos
    nome: 'Nelson', 
    sobrenome: 'Martins',
    idade: 24
}; // assim o objeto 'pessoa1' possui os atributos nome, sobrenome e idade

console.log(pessoa1); // exibindo o objeto inteiro
console.log(pessoa1.idade); // exibindo apenas o atributo 'idade' do objeto pessoa1

// Também podemos modificar esses atributos

pessoa1.sobrenome = 'Neto'; // agora o atributo sobrenome teve seu valor atualizado
console.log(pessoa1.sobrenome); // exibindo apenas o atributo 'sobrenome'

// Porém, dessa forma não resolvemos todos os problemas porque cada pessoa ainda é um objeto, logo, para melhorar ainda mais podemos criar uma função que retorna um objeto

const criarPessoas = (nome, sobrenome, idade) => { // parametros
    return {nome, sobrenome, idade}; // essa função recebe três parametros e retorna eles dentro de um objeto {}.

    // essa função pode ser chamada de factory (fabrica)
    // com ela podemos criar varias pessoas infinitamente, basta reutiliza-la
}; 

const primeiraPessoa = criarPessoas('Nelson', 'Martins', '24'); // passando os argumentos para a função e salvando o objeto retornado dentro dessa variavel
console.log(primeiraPessoa); // exibindo objeto
primeiraPessoa.sobrenome = 'Neto'; // também podemos fazer alteracoes 
console.log(primeiraPessoa.sobrenome); // exibindo apenas o atributo 'sobrenome'    

// Podemos colocar funcoes dentro de um objeto e quando isso ocorre as funções são chamadas de "métodos"

const segundaPessoa = {
    nome: 'Maria', 
    sobrenome: 'Eduarda',
    idade: 21,
    seApresentar(nome = segundaPessoa.nome, sobrenome = segundaPessoa.sobrenome, idade = segundaPessoa.idade) { // esse meotodo retorna uma mensagem na tela e usa os proprios atributos para isso
        return `Olá, meu nome é ${nome} ${sobrenome}, e eu tenho ${idade} anos!`; // mensagem que a funcao retorna
    },
    estudos(){ // um objeto pode ter inumeros metodos
        return 'eu estudo javascript';
    }
};

console.log(segundaPessoa.seApresentar()); // executando metodo dentro da funcao
console.log(segundaPessoa.estudos()); // executando outro metodo

// A palavra 'this' referencia o proprio objeto e é ela que devemos utilizar para referenciar o proprio objeto, diferente da forma que fizemos acima

const terceiraPessoa = {
    nome: 'Levi', 
    sobrenome: 'Martins',
    idade: 'ainda não nasci',
    falar(){ // com a palavra this nos referenciamos o proprio objeto em que o metodo faz parte, por isso nao foi necessario passar os parametros e argumentos
        return `Olá, me chamo ${this.nome} ${this.sobrenome} e eu ${this.idade}.`; // isso deixou o codigo mais limpo e direto
    }
};

console.log(terceiraPessoa.falar()); // executando funcao que referencia o proprio objeto em que ela faz parte

// Se fossemos dividir o javascript em dois pedaços poderiamos dividir em funcoes e objetos