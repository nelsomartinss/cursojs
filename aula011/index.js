// String = Texto

let aspasSimples = 'Nelson "Martins"'; // podemos usar aspas duplas dentro de aspas simples
console.log(aspasSimples);

let aspasDuplas = "Nelson 'Martins'"; // podemos usar aspas simples dentro de aspas duplas
console.log(aspasDuplas);

// Usando aspas duplas dentro de aspas duplas ou aspas simples dentro de aspas duplas - escapando caractere 

let aspasDuplasEscapadas = "Nelson \"Martins\""; 
console.log(aspasDuplasEscapadas); // basta usar uma barra invertida antes das aspas duplas

let aspasSimplesEscapadas = 'Nelson \'Martins\'';
console.log(aspasSimplesEscapadas); // basta usar uma barra invertida antes das aspas simples

// Criando um tab com barra

let tabComBarra = 'Nelson \t Martins'; // esse \t cria um tab dentro do texto 
console.log(tabComBarra); 

// Usando barras dentro do texto - \\ 

let barras = 'Nelson \\ Martins'; // para criar uma barra precisamos de duas
console.log(barras);

// Strings são indexadas - eles possuem um index - eles são interaveis - cada caractere possui um indice

// Nelson
// 012345 - Cada letra do nome possui um indice

// Acessando o indice da string pela notacao de colchetes

let meuNome = 'Nelson';
let indiceQuatro = meuNome[3]; // acessando a letra de indice 4
console.log(indiceQuatro); // vai mostrar a letra 'o'

// fazendo a mesma coisa pelo metodo charArt()

let elementoQuatro = meuNome.charAt(5); // aqui 
// nos passamos
console.log(elementoQuatro); // exibindo a letra 'n'

// Das duas formas acima, se o indice nao existir ele vai retornar undefined

// Procurando em qual indice a palavra estar com indexOf()

meuNome = 'Nelson Martins'; 
console.log(meuNome.indexOf('Martins')); // o metodo indexOf vai retornar em qual posição do indice a palavra Martins vai estar - que é 7
// Se o indexOf nao encontrada ele vai retornar -1

// Procurando indice a partir de uma posição especifica com indexOf

console.log(meuNome.indexOf('a', 7)); // estou procurando a letra 'a' a partir da posição 7 - ele vai retornar 8

// Procurando indice a partir de uma posição especifica de tras para frente com lastIndexOf()

console.log(meuNome.lastIndexOf('M', meuNome[-1])); // Aqui eu estou procurando o index de M a partir da ultima posição da string, de tras para frente, é isso que representa o -1

// Substituindo palavras na string com replace()

meuNome = meuNome.replace('Martins', 'Neto'); // estou substituindo a palavra Martins por Neto na string
console.log(meuNome);

// Descobrindo o tamanho da string com o atributo lenght

console.log(meuNome.length); // 11 caracteres - Nesse caso ele conta o 0 como 1, ou seja, vai de 0 a 10, mas contando tudo da um total de 11 caracteres

// Capturando um pedaço da string com .slice()
// primeiro passamos o de onde começa e depois onde queremos terminar de acordo com o indice:

let primeiroNome = meuNome.slice(0, 6); // ele sempre corta a ultima posicao, eu pedi 'Nelson' porem, se eu coloco de 0 a 5 ele devolve 'Nelso', logo, eu peço de 0 a 6 para que a ultima letra nao seja cortada e sim a a posicao 6 que seja
console.log(primeiroNome); // 'Nelson'

// Podemos fazer isso com valor negativo
console.log(meuNome.slice(-4)); // Aqui ele conta de 0 a 4 de trás pra frente, então é como se o nome fosse assim: oteN - É como pegar o valor da string inteira e fazer isso -4

// Dividindo a string nos espaços e criando array com elas

const frase = 'Jesus Cristo reinará para sempre'; 
const arrayFrase = frase.split(' '); // A frase será cortada em cada espaço e será criada uma lista de palavras
console.log(arrayFrase); 

const frase2 = 'Jesus Cristo é o Senhor'; 
const arrayFrase2 = frase2.split(' ', 2); // Aqui é da mesma forma, porém, especificamos que só queremos 2 cortes
console.log(arrayFrase2); // [Jesus, Cristo]