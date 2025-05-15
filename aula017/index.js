// Valores primitivos e valores por referência (diferenças)

/*
    valores primitivos (imutaveis)
        - string
        - number
        - boolean 
        - undefined
        - null
        - bigint (a estudar)
        - symbol (a estudar)

       obs: quando usamos o sinal de atribuicao os valores sao copiados
*/

// tipos de dados primitivos são imutaveis 
let nome = 'Nelson';
nome = 'Maria'; // nao estamos trocando o dado e sim o valor que esta dentro da variavel
nome[0] = 'F'; // uma string é imutavel, por isso nao é possivel acessar suas posicoes e alterar o valor
console.log(nome); // continuara exibindo 'Maria' por que uma string é um tipo de dado imutavel e isso serve para todos os outros tipos primitivos

let numero = 1;
let outroNumero = numero; // quando fazemos isso com tipos primitivos estamos apenas fazendo uma cópia
console.log(numero, outroNumero); // mesmo valor
numero = 2; // por isso, quando alteramos o valor de numero o valor de outroNumero nao é alterado por que o que ele possui nao é um valor referencial e sim uma copia
console.log(numero, outroNumero); // somente o valor de numero foi alterado, outroNumero continua com a copia do valor inicial

// Quando estamos usando valores imutaveis estamos copiando um valor de um local na memoria (variavel) para outro local da memoria (outra variavel)

/*
    valores por referencia (mutaveis)
        - array 
        - object
        - function

        obs: quando usamos o sinal de atribuicao os valores referenciados ao mesmo local da memoria
*/

// Arrays - valores por referencia
const familia = ['Nelson', 'Maria', 'Levi', 'Amêlie'];
const familiaDenovo = familia; // isso nao é uma cópia, os valores passados para essa variavel sao referenciados, ou seja, familiaDenovo aponta para o mesmo local que a variavel familia aponta na memoria
console.log(familia, familiaDenovo);  // exibindo os mesmos valores
familia.push('Davi'); // adicionamos um item a familia e a variavel familiaDenovo vai receber também por que é referenciado (aponta ao mesmo local na memoria)
console.log(familia, familiaDenovo); // exibindo as variaveis com os valores atualizados nas duas (apontando para o mesmo local na memoria)
familiaDenovo.push('Anêlie'); // o mesmo serve para a variavel familiaDenovo, como ela aponta para o mesmo local na memoria, se adicionarmos itens a ela estaremos adicionando itens tambem dentro da array criada em 'familia'
console.log(familia, familiaDenovo); // exibindo

// Quando usamos valores imutaveis estamos usando uma ou mais variaveis para apontar pro mesmo local da memoria

// Mas e se desejarmos copiar esse valor de fato e nao passarmos por referencia?

// Para isso usamos o operador ' ... ' (spread ou operador rest)

// spread (espalhar)
const maisUmaFamilia = [...familia]; // agora sim o valor de familia foi copiado de fato para dentro de outra variavel, agora nao é mais referencial (agora é independente)
console.log(maisUmaFamilia); 
maisUmaFamilia.push('Celine'); // como foi copiado, somente essa variavel vai receber esse novo item
console.log(maisUmaFamilia);
console.log(familia, familiaDenovo); // o novo item nao foi adicionado

// object 
const primeiraPessoa = {
    nome: 'Nelson',
    sobrenome: 'Martins'
}

const mesmaPessoa = primeiraPessoa; // aqui da mesma forma, a variavel mesmaPessoa vai apontar pro mesmo local na memoria que a variavel primeiraPessoa
console.log(primeiraPessoa, mesmaPessoa); // exibindo 

primeiraPessoa.nome = 'Maria'; 
console.log(mesmaPessoa); // mesmo modificando o nome em primeiraPessoa, a variavel mesmaPessoa mostra os mesmos valores

mesmaPessoa.sobrenome = 'Eduarda'; 
console.log(primeiraPessoa); // o mesmo acontece se modificarmos a mesmaPessoa

const mesmaPessoaDeNovo = {...primeiraPessoa}; // agora estamos copiando um objeto para dentro de outro e tornando o valor desta variavel idependente
mesmaPessoaDeNovo.nome = 'Nelson'; // a mudança ocorrerá somente nessa variavel

console.log(primeiraPessoa, mesmaPessoa, mesmaPessoaDeNovo); // mostrando como a terceira variavel é diferente (ela possui uma copia, nao referencia o mesmo local na memoria das outras duas)