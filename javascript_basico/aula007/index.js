// tipos primitivos

// String 
const nome = 'Nelson'; // aspas simples
const sobrenome = "Martins"; // aspas duplas
const ultimoNome = `Neto`; // crase (podemos usar template strings)

// Numbers 
const idade = 24; // int
const altura = 1.74; // float

// Undefined
let numeroDeTelefone; // Variaveis não iniciadas recebem o valor undefined (constantes não pode ser criadas assim, apenas com let) - Undefined não aponta para local nenhum na memoria

// Null
let numeroDaCasa = null; // também não aponta para local nenhuma na memoria, usamos isso quando desejamos colocar uma variavel como nula, algo que é nulo é diferente de indefinido, esse valor tem que ser colocado manualmente, uma variavel nunca vai ter o valor nulo automaticamente já o undefined sim. 

// Booleans
const aprovado = true; 
const reprovado = false; // booleans só possuem dois valores: true ou false. Usamos isso para verificar condições/mudar o fluxo das aplicações, booleans são valores logicos

// Checagem de tipos  - Usamos o typeof

console.log(typeof nome, nome); // exibindo o tipo e o valor da variavel

console.log(typeof idade, idade + " " + typeof altura, altura); // para numeros o tipo sempre será number

console.log(typeof numeroDeTelefone, numeroDeTelefone); // tanto o tipo quanto o valor é indefinido

console.log(typeof numeroDaCasa, numeroDaCasa); // o valor null é um tipo primitivo, porém, existe um bug no javascript desde o ECMAScript original dos anos 90 que faz com que o typeof de null retorne object

console.log(typeof aprovado, aprovado); // o tipo é boolean e o valor é true


