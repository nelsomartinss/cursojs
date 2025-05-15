// Numbers
// O JavaScript possui imprecisao nos numeros

let numeroInteiro = 10; // number
let numeroDecimal = 2.5; // number

// Convertendo numero para string para concatenarmos eles, usamos o .toString()

console.log(numeroInteiro.toString() + numeroDecimal.toString()); // 102.5 (concatenado)

// Porém, da forma feita acima esse numero nao deixou de ser numero, somente na exibição é ele se tornou string (ele foi convertido temporariamente), confira:

console.log(typeof numeroInteiro, typeof numeroDecimal); // number number

// Se desejarmos a conversao de fato precisamos armazenar isso em uma variavel:

numeroInteiro = numeroInteiro.toString(); 
numeroDecimal = numeroDecimal.toString();
console.log(typeof numeroInteiro, typeof numeroDecimal);

// O mesmo vale para conversao de number para string

let numeroInteiroString = '10'; 
let numeroDecimalString = '2.5'; // strings

console.log(Number(numeroInteiroString) + Number(numeroInteiroString)); // aqui o numero so esta sendo convertido para exibicao, ele é convertido temporariamente

console.log(typeof numeroInteiroString, typeof numeroDecimalString); // mas os valores e mantem number, se desejarmos a conversao de fato precisamos guardar o valor em uma variavel

numeroInteiroString = Number(numeroInteiroString);
numeroDecimalString = Number(numeroDecimalString); 
console.log(typeof numeroInteiroString, typeof numeroDecimalString); // agora sim as strings foram convertidas para number

// Pegando a versao binaria do numero com .toString(2); 

const anoDeNascimento = 2001; 
console.log(anoDeNascimento.toString(2)); // O método .toString() pode receber um argumento de base númerica e ele aceita base de 2 a 36 (binario, octal, decimal, hexadecimal etc)

// Curiosamente existe uma forma de retornar do binario para o decimal

const anoDeNascimentoBinario = anoDeNascimento.toString(2);
console.log(parseInt(anoDeNascimentoBinario, 2)); // assim pegamos um valor binario e retornamos para o decimal: 2000

// Escolhendo quantidade de casas decimais os numeros podem ter com .toFixed()

const numeroGigante = 10.24453534; // isso é um numero com muitas casas decimais
console.log(numeroGigante.toFixed(2)); // com o método .toFixed() podemos passar quantas casas decimais desejamos, ou seja, passamos duas e o numero vai ser exibido assim: 10.24 

// Verificando se um numero é inteiro ou decimal/float utilizando o objeto Number e o método .isInteger

let numeroTeste = 10; // inteiro, porem, podemos mudar o valor para testar

console.log(Number.isInteger(numeroTeste)); // Primeiro acessamos o objeto number e dentro dele o método isInteger(), depois, dentro dele passamos o numero que desejamos checar, ele vai retornar true se o numero for inteiro e false se for decimal

// Verificando se uma operacao é válida com numeros com isNaN

const numero1 = 10; // number
const string1 = 'Nelson'; // string
console.log(Number.isNaN(numero1 + string1)); //  estamos acessando o objeto number e usando o método isNaN para verificar se a operacao deu NaN (not a number), se sim, ele exibe true, se nao, ele exibe false

// nao é uma boa pratica de programacao fazer contas utilizando strings, sempre converta explicitamente para um numero

// O padrão de precisao de numeros javascript é o IEEE 754-2008, e esse padrao possui uma certa imprecisao:

let teste1 = 0.7; 
let teste2 = 0.1; 
let conta = teste1 + teste2;
console.log(conta); // ao inves de exibir 8, ele exibe 0.799... (que nao vai fazer tanta diferenca aqui), para resolver isso usamos a conversao de numeros decimais e o toFixed
conta = Number(conta.toFixed(2)); // agora sim nos temos 0.8
console.log(Number.isInteger(conta)); // e o numero de fato é float (entao false), se estivessemos usado somente o isInteger nao iria funcionar muito bem, apenas visualmente
