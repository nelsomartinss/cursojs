// Exercicio com variaveis

let varA = 'A'; // o valor de A tem que ser B
let varB = 'B'; // o valor de B tem que ser C
let varC = 'C'; // o valor de C tem que ser A

let varATemp; // precisamos de mais uma variavel para isso

varATemp = varA; // essa nova variavel guarda o valor de A temporariamente
varA = varB; // B
varB = varC; // C
varC = varATemp; // agora a variavel C recebe o valor de A, que foi guardado pela variavel varATemp

console.log(varA, varB, varC); // B C A

// Outra forma de resolver - Desestruturação

varA = 'A'; 
varB = 'B';
varC = 'C';  // retornando valores ao padrão

[varA, varB, varC] = [varB, varC, varA]; // isso se chama desestruturação

// de um lado temos um array com os valores em ordem, e do oturo lado temos outro array com a ordem que desejamos, dessa forma o javascript cria um array e atribui os valores a um novo destino tudo ao mesmo tempo

console.log(varA, varB, varC); // exibindo os valores

// outro exemplo de destruturação

const [nome, idade, altura] = ['Nelson', 24, 1.74]; // criando array e atribuindo os valores a cada destino ao mesmo tempo
console.log(nome, idade, altura);