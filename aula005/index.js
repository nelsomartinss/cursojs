// As mesmas regras para let utilizaremos para const, com exceção de que não podemos alterar o valor de uma variavel

/* Não funciona:

const nome = 'Nelson'; 
nome = 'Maria'; - Isso não pode ser feito

const nome; - não podemos criar uma constante sem inicializar
nome = 'Nelson' - Isso não pode ser feito depois
*/

const nome = 'Nelson';
console.log(nome); 

// constate não pode ser modificada
// constante não pode ser criada sem ser inicializada
// Use constante para valores que não devem ser mudados

// Podemos atribuir o valor de uma variavel a outra e constante tambem

let meuNome = 'Nelson'; // variavel com let
const meuSegundoNome = 'Martins'; // const
const meuNomeCompleto = `${meuNome} ${meuSegundoNome}`; // utilizando template string para isso
console.log(meuNomeCompleto); // utilizando let e constante para provar a atribuição de uma variavel para outra

// JavaScript possui tipagem dinamica então a partir do momento que declaramos a variavel ela já vai vir com um tipo, para checar qual o tipo usamos o typeof

console.log(typeof meuNome); // string
const idade = 24
console.log(typeof idade); // number

// Isso é importante para um futuro calculo, precisamos saber utilizar numeros e strings, por que se usarmos o operador de + com strings ele vai concatenar e não somar