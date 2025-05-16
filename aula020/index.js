// Avaliação curto-circuito

/*
    Sabemos que quando usamos o operador && as duas ou mais expressoes comparadas precisam ser true para a expressao ser true. Por isso, se começarmos a checar uma expressao com && e ela ja iniciar com false significa que nao é mais necessário continuar a checagem por que se uma das expressoes der false entao o resultado é false. 

    O mesmo ocorrer com ||, se um das expressões for true, logo a expressão toda é true já que com || basta que apenas uma expressao seja true para que o resultado seja true.

    Por isso existe a avaliação de curto circuito, para que a checagem seja interrompida já nesses momentos decisivos e isso impede checagens desnecessárias

*/

// && 

console.log(1 && 2 && 3); // ele vai checar todas as expressões e mostrar no console a ultima porque ele passou por todas e nao encontrou uma false, chegando ate o final das expressoes

// Quando uma expressão com && der false em uma avaliação com curto circutio ele retorna o valor que avalia como falso.
console.log('Nelson' && 0 && 'Maria'); // ele vai ver que 'Nelson' é true e avançar para verificar a proxima, porém, a proxima é 0, ele vai avaliar como false, ele para ai e exibe onde ele parou, o valor que avalia como false

console.log(0 && 'Maria' && 'Nelson'); // aqui a primeira expressão é false, logo ele nem vai se dar o trabalho de avaliar as outras duas

// O operador && vai procurar uma expressão false. Encontrando ele finaliza a avaliação

console.log('\n');

// || 

console.log(0 || 'Nelson' || 0); // Aqui apenas uma das expressoes precisa ser true para ele avaliar como true, logo, ele vai parar na segunda expressão que já vai ter o resultado desejado 

console.log('Nelson' || 0 || 0); // Aqui ele vai checar somente a primeira 

console.log(0 || 0 || 'Nelson'); // aqui ele vai checar até a ultima (ate encontrar a true)

// O operador || vai procurar uma expressão true. Encontrando ele finaliza a avaliação

// Tudo que pode ser avaliado em falsy ou truthy em javascript

/* FALSY
    false (valor que literalmente é false)
    0 
    '' / "" / `` (todos os tipos de string vazia)
    null (nao aponta para lugar algum na memoria)
    undefined (nao aponta para lugar algum na memoria)
    NaN
*/

/* THRUTY 
    Tudo que nao for false, 0, strings vazias, null undefined e NaN é avaliado como true em javascript
*/

console.log('\n')

// Exemplo prático 
function falarOi(){ // uma simples função que fala 'oi'
    return 'oi';
}

const vaiExecutar = false; // literal false
vaiExecutar || console.log(falarOi()); // O operador OR vai procurar por um true, ele ver o primeiro valor e procura o true no segundo, e portanto ele executa
vaiExecutar && console.log(falarOi()); // Como o operador && procura por um false, logo de primeira ele o encontra e assim ele nao executa a função

// Se a variavel fosse qualquer valor avaliado como falsy o resultado seria o mesmo

// se mudassemos o valor acima para true o OR pararia a execução antes de avaliarmos a função e o AND iria executar a função. 
