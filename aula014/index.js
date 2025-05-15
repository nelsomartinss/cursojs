// Arrays/Listas/Matrizes 

// Para criar um array utilizamos colchetes 
const familia = ['Nelson', 'Maria', 'Levi', 'Amélie']; // array de strings 
const numeros = [1, 2, 34, 234, 4546]; // array de numeros

const arrayDiversa = ['Nelson', undefined, null, 123, -12, true]; // array com diversos tipos primitivos, porem, isso NÃO É UMA BOA PRATICA - Sempre tente manter um array apenas com um tipo de dado

console.log(familia);
console.log(numeros);
console.log(arrayDiversa); // exibindo

// Assim como as strings, as arrays também são indexados, porém, eles são indexados por elemento
//                     0          1      2        3
// const familia = ['Nelson', 'Maria, 'Levi', 'Amélie'];

// Acessando primeiro elemento de um array

console.log(familia[0]); // primeira posição da array

// Editando algum elemento do array 

familia[2] = 'Davi'; // estamos substituindo a segunda posição da array de 'Levi' para 'Davi' 
console.log(familia[2]); // exibindo
console.log(familia); // exibindo array completa 

// Obs: Mesm o criando essa variavel com const algumas estruturas de dados como array e object podem ser mudados. Quando usamos const com valores mutaveis (array ou objetos) esses valores podem ser mudados por que a variavel continua apontando para o mesmo local da memoria e a mudança é apenas interna no objeto, a unica coisa que nao poderiamos fazer é mudar o valor/tipo da variavel, assim: 

// const familia = 'testando'; >> isso nao é possivel

// Adicionando item ao array 

console.log(familia[4]); // essa posição não existe na array >> retorna um undefined, pois é uma posição indefinida
familia[4] = 'Levi'; // estamos adicionando valor a essa posição agora 
console.log(familia[4]); // exibindo valor adicionado

// Descobrindo tamanho da array 

console.log(familia.length); // usamos o atributo lenght para descobrir o tamanho da array, ou seja, quantos itens a array possui.

// Adicionando item ao final do array sem precisar saber o tamanho dela com push()

familia.push('Anélie'); // assim estamos adicionando mais um item ao array sem precisa saber quantas posições ela possui
console.log(familia); // exibindo array

// Adicionando item ao inicio do array com unshift()

familia.unshift('Celine'); // adicionando celine ao inicio do array e isso vai mudar todo os indices do array
console.log(familia); // exibindo array completa 

// Removendo elementos do final do array com pop()

const removido = familia.pop(); // Anélie vai ser removida da array e vai ser salva nessa variavel
console.log(removido); // exibindo item removido
console.log(familia); // array nova

// Obs: Geralmente colocaremos itens no array pelo final mesmo

// Removendo elementos do inicio do array com shift()

const removido2 = familia.shift(); // Celine vai ser removida da array e vai ser salva nessa variavel 
console.log(removido2); // exibindo item removido do inicio 
console.log(familia); //array nova

// Podemos deletar valores e deixar seu espaço vazio

delete familia[2]; // agora o espaço que seria de 'davi' será: <1 empty item>
console.log(familia[2]); // vai mostrar undefined
console.log(familia); // exibindo

// Corrigindo... 

const elementoRealocado = familia.pop(); // Vamos pegar o ultimo elmento e deletar da array e salvar nessa variavel
familia[2] = elementoRealocado; // colocaremos esse elemento naquela posicao vazia
console.log(familia.length); // exibindo o novo tamanho da array
console.log(familia[2]); // elemento realocado
console.log(familia); // array completa 

// Obs: Nunca deixe buracos na sua array

// Fatiando array com slice()

const pais = familia.slice(0, 2); // queremos apenas os  dois primeiros elementos da array, porém, se fatiarmos de 0 a 1, ele cortará o 1, por isso colocamos de 0 a 2, para ele cortar o 2 e sobrar o 0 e 1; 
console.log(`Os pais da família são ${pais}`); // exibindo

const filhos = familia.slice(-2); // aqui estamos pegando apenas as 2 ultimas posicoes da lista
console.log(`Os filhos da família são ${filhos}`); // exibindo

// Melhorando a exibinção com .join()

console.log(`Os pais da família são ${pais.join(' e ')}`);
console.log(`Os filhos da família são ${filhos.join(' e ')}`); // estamos colocando um 'e' entre as virgulas ou espaços da array para melhorar a exibicao

// Um array é um objeto indexado, por isso ele vai retornar 'object' no typeof

console.log(typeof familia); // object 

// Se desejarmos verificar se REALMENTE é um array devemos pesquisar assim:

console.log(familia instanceof Array); // se retornar true de fato é uma array
