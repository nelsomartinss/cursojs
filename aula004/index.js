// Variáveis com let
// Variaveis são espaçõs na memoria de computador para guardar dados que podem ser usadas posteriormente, o valor de uma variavel pode ser modificado

// usamos a palavra let para criar variaveis
let nome = 'Nelson'; // a variavel nome guarda o valor 'Nelson'. 
console.log(nome); // exibindo valor da variavel

// template string (melhor que usar virgula)
console.log(`${nome} nasceu em 2001`); // utilizando template strings para exibir textos dinamicos, agora sempre que alteramos o valor da variavel o texto mudará

// declarando e não inicializando 
let idade; // aqui estamos declarando uma variavel sem colocar valor nela, nesse caso o valor da variavel sera undefined (indefinido)
console.log(idade); // exibindo o undefined

// atribuindo valor (inicializando)
idade = 24; // podemos fazer isso, mas não podemos redeclarar - é sempre o ultimo valor a ser utilizado
console.log(idade); // exibindo valor

// let nome; - Declarar a variável novamente não é possivel (isso resultaria em erro de sintaxe, nome já foi declarado, isso para a execução do código)

// Criação de nome de variaveis

// Não podemos criar variaveis com palavras reservadas: let, function, console, etc.

// escreva o nome das variaveis em camelCase, nao comece o nome com simbolos ou numeros, use nomes que façam sentido e nao utilizem espacos, ao inves disso use _ (underline), exemplos:

let nomeCompleto; // esse nome não começa com numeros, utiliza camelCase, nao comeca com simbolos, numeros e nao possui espacos, outros exemplos

let cadastroDeProdutos; 
let listaDeNomesDeAlunos; // essas duas variaveis possuem nomes que façam sentidos
 
let usuario002; // podemos usar numeros, só não podemos usar numeros no começo

// utilizar camelCase é uma convenção dentro do javascript

// o Javascript é case-sensitive, ou seja, letras maiusculas e minusculas sao diferenciadas

let MEUNOME; 
let meunome; // isso é visto como uma variavel diferente

// não utilize mais o 'var', utilize let para criar variaveis