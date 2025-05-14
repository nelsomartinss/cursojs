// Primeira diferença entre var e let

// Com var podemos redeclarar a variavel
var nome = 'Nelson'; 
var nome = 'Maria'; // Isso é um problema

// No ECMAScript ES6 - Foi incluido o let e com o let não é possivel redeclarar uma variavel com o mesmo nome, somente reatribuir
let nome2 = 'Nelson';
nome2 = 'Maria';

// NÃO CRIE VARIAVEIS SEM ESPECIFICAR - ASSIM A VARIAVEL SE TORNA GLOBAL
nome3 = 'teste'; 
console.log(nome3);

// Não use var para criar variaveis, use let