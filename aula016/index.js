// Funções 
// Funções são blocos de código que executam uma ação (mandar um valor para ela e pegar de volta)

// Para criar uma função usamos a palavra function e apos isso o nome dela (usamos a mesma regra para criação de nome das variaveis), depois colocamos parenteses e abrimos e fechamos chaves

function dizerOla(){
    console.log('Olá, mundo!'); 
    // essa função vai dizer 'olá, mundo' quando ela for executada
    // tudo que fica dentro da função está protegido
};

// chamando função (é só chamar pelo nome); 
dizerOla(); // executando o que esta dentro da função

// Parametros (fazer a função receber valores)

function dizerOlaAAlguem(nome){ // essa função vai dizer ola para alguem, por isso ela vai receber como parametro o nome de uma pessoa
    console.log(`Olá, ${nome}!`); // quando chamarmos essa função precisamos passar para ela esse nome
};

dizerOlaAAlguem('Nelson'); // passamos o nome 'Nelson' como argumento para essa função

// funções são blocos de código reutilizaveis e assim usar ela quantas vezes desejarmos
const meuNome = 'Nelson Martins'; 
dizerOlaAAlguem(meuNome); // podemos passar variaveis como argumento

// obs: sempre que passamos um valor a variavel chamamos de argumento

// retorno de uma função

dizerOla(); 
dizerOlaAAlguem(meuNome); // essas duas funções não retornam nada, para verificar isso podemos tentar salvar o retorno dela em uma variavel
const variavelDizerOla = dizerOla(); // quando colocamos uma função dentro de uma variavel significa que desejamos receber o valor de retorno dela, como essa função não retorna nada então o resultado é undefined, mas ela vai ser executada
console.log(variavelDizerOla); // undefined

// Precisamos especificar o que desejamos que ela retorne e para isso precisamos usar a palavra 'return'

function dizerOlaDenovo(){
    console.log('Olá, Mundo!'); // a função vai executar essa mensagem
    return `Ela disse 'ola'`; // e o retorno dela é essa mensagem, so para teste
};

dizerOlaDenovo(); // assim ela não vai exibir o seu retorno, para isso precisamos salvar o retorno em uma variavel:
const variavelDizerOlaDenovo = dizerOlaDenovo(); // salvando o retorno da funcao
console.log(variavelDizerOlaDenovo); // exibindo a mensagem de retorno

// Melhorando a forma de execução com o return

function dizerOlaMaisUmaVez(){
    return `Olá, mundo!`; // a mensagem a ser executada já é o valor de retorno dessa variavel, porem nao vai exibir nenhuma mensagem, vamos precisar salvar em uma variavel e depos exibir para isso
}; 

const variavelDizerOlaMaisUmaVez = dizerOlaMaisUmaVez(); // salvando o retorno da variavel
console.log(variavelDizerOlaMaisUmaVez); // exibindo

// funçao que soma dois numeros:

function adicao(x, y){
    const resultado = x + y; // variavel que soma
    return resultado; // o retorno da funcao é resultado da soma
}; 
const somando = adicao(2248824, 29382358); // salvando retorno da funcao
console.log(somando); // exibindo retorno

// Proteção da função: não podemos acessar o que esta dentro da função do lado de fora dela 

function testandoProtecao(){
    const protegido = true;
    return protegido;
};

// console.log(protegido); // estamos tentando exibir a const protegido, porem, nao é possivel já que ela é restrita a função, logo o resultado é um erro

const protegido = true; // variavel de mesmo nome e valor do lado de fora, isso prova que sao duas coisas diferentes 
console.log(protegido);

// O return encerra a função - tudo que vem apos o return nao será executado 

function encerrando(x, y){ // passando dois parametros
    return 'encerrando função...'; 
    const soma = x + y; // essa linha nunca será executada
    console.log(soma); // e nem essa
};

const funcaoEncerrada = encerrando(12, 21); // mesmo passando os parametros, as linhas abaixo do return nunca serao executadas
console.log(funcaoEncerrada); // exibindo apenas o retorno

// chamando funcao sem passar os argumentos 

function multiplicacao(x, y){
    const resultado = x * y;
    return resultado;
};

const multiplicando = multiplicacao(); // o retorno será NaN
console.log(multiplicando); // NaN...

const multiplicando2 = multiplicacao(2); // com apenas 1 valor o também dará NaN
console.log(multiplicando2); // NaN...

// Evitando problemas definindo valores padrão para os parametros

function subtracao(x = 0, y = 0){ // aqui estamos definindo que o valor padrao para os parametros é 0, ou seja, se nao passarmos valor nenhum ele vai assumir que os argumentos são 0 e 0; 
    const resultado = x - y; 
    return resultado;
}; 

const subtraindo = subtracao(); // nao passando valores o resultado vai ser 0 ou inves de NaN
console.log(subtraindo); // 0 - 0 = 0

const subtraindo2 = subtracao(2); // passando apenas um valor, ele vai assumir que x = 2 e o y ele vai assumir o valor padrão, que é 0
console.log(subtraindo2); // 2 - 0 = 2

// funções anonimas

const dizerMeuNome = function(){ // funções anonimas sao a mesma coisa das anteriores com a diferença de que elas nao possui um nome definido
    return 'Olá, Nelson';
}

console.log(dizerMeuNome()); // o que acontece é que no final das contas o nome da função vai ser o nome da variavel que guarda ela

// Arrow functions (tambeem é uma função anonima), ela veio para facilitar mais a criacao de funcoes

const dizerMeuNomeArrow = (nome) => {
    return `Olá, ${nome}!`;
}; // isso seria uma versao mais completa de uma arrow function, porem, ela foi criada para ser mais simples 

console.log(dizerMeuNomeArrow('Nelson')); // executando ela. 

// Arrow function da forma mais simplificada...

const digaONome = nome => `Olá, ${nome}!`; // a arrow function dispensa os parenteses se ela so tiver um parametro e dispensa o return se ele acontecer de forma direta
console.log(digaONome('Nelson')); // executa da mesma forma

// obs: geralmente desejaremos criar funcoes pequenas que executam apenas uma especialidade

