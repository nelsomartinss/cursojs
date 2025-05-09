// Objeto Math 

let num1 = 9.6; // numero decimal

// Arredondando numero para baixo:
let arrendondarParaBaixo = Math.floor(num1); // Usamos o Math.floor para arrendondar o valor para baixo
console.log(arrendondarParaBaixo); // 9.6 >> 9

// Arredondando numero para cima:
let arrendondarParaCima = Math.ceil(num1); // Usamos o Math.ceil() para arrendondar o valor para cima
console.log(arrendondarParaCima); // 9.6 >> 10

// Arredondando numero para o valor mais proximo:
num1 = 9.5;
let arrendondamentoMaisProximo = Math.round(num1); // Essa função vai arredondar para cima a partir de .5 e para baixo a partir de .4 automaticamente
let num2 = 9.4; 
let arrendondamentoMaisProximo2 = Math.round(num2); // aqui ele vai arredondar para baixo
console.log(arrendondamentoMaisProximo); // 9.5 >> 10
console.log(arrendondamentoMaisProximo2); // 9.4 >> 9

// Pegando o maior e o menor numero de um sequencia

console.log(Math.max(1, 2, 3, 4, 12030, 2938482, 394823)); // o método max captura o maior numero de uma sequencia
console.log(Math.min(1, 2, 3, 4, 12030, 2938482, 394823)); // o método min captura o menor numero de uma sequencia

// Gerando numeros aleatorios

let numeroAleatorio = Math.random(); // ele vai gerar um numero aleatorio entre 0 e 1
console.log(numeroAleatorio);

// Conseguindo um numero aleatorio entre 1 e 10

numeroAleatorio = Math.random() * (10 - 1) + 1; // sempre devemos subtrair o numero maximo pelo minimo e depois somar com o minimo
console.log(numeroAleatorio); // o numero sai quebrado 
// podemos arredondar o numero para ficar melhor:
numeroAleatorio = Math.round(Math.random() * (10 - 1) + 1);
console.log(numeroAleatorio); // agora o numero sempre vira inteiro
console.log(Number.isInteger(numeroAleatorio)); // e inteiro, o arredondamento de fato transforma o numero em inteiro

// Elevando numero

const elevandoNumero = Math.pow(numeroAleatorio, 2); // estamos pegando aquele numero aleatorio e elevando a 2 
console.log(elevandoNumero);

// Descobrindo a raiz quadrada de um numero

const raizManeiraNormal = Math.round(numeroAleatorio ** (1/2)); // quando elevamos um numero a 1/2 conseguimos a raiz quadrada dele
const raizUsandoMath = Math.round(Math.sqrt(numeroAleatorio)); // A mesma coisa pode ser feits usando o metodo .sqrt()
console.log(raizManeiraNormal, raizUsandoMath); // exibindo o mesmo valor nas duas variaveis com os valores ja arredondados

// Se divisao for feita por um numero muito pequeno o javascript apresenta o valor infinity, por isso, é possivel dividir um numero por 0

console.log(100 / 0); // ele nao apresenta erro como a maioria das linguagens e ele avalia como true


