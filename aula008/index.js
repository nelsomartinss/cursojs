// Operadores Aritméticos

/*
    + (adição e concatenacao)
    - (subtracao)
    / (divisao)
    * (multiplicacao)
    % (resto da divisao)
*/

const somando = 1 + 1; // 2
console.log(somando); // vai mostrar a soma de dois numeros 

const concatenando = '1' + '1'; // 11
console.log(concatenando); // vai juntar as duas strings, pois, os numeros estao entre aspas, logo são texto
const concatenando2 = '1' + 40; // 140
console.log(concatenando2); // também é possivel concatenar texto com numero

const subtraindo = 10 - 5; // 5
console.log(subtraindo); // resultado de uma subtracao

const multiplicando = 10 * 2; // 20
console.log(multiplicando); // resultado de uma multiplicacao

const dividindo = 10 / 2; // 5
console.log(dividindo); // resultado de uma divisao

const restoDeUmaDivisao = 4 % 3 // 1
console.log(restoDeUmaDivisao); // 3 divido por 2 é 2, logo, sobra 1, esse é o resultado do resto da divisão, quando a divisao da um numero inteiro o resto é 0

// Prescedencia de Operadoes

/*
    0. Parenteses
    1. Multiplicacao, divisao e resto
    2. Adição e subtracao
*/

const num1 = 10;
const num2 = 30;
const num3 = 50;

console.log(num1 + num2 * num3); // Aqui vai ser primeiro feito a multiplicacao e depois a soma

console.log(num1 / num3 * num2); // Aqui o resultado é o mesmo idenpendente da ordem pois esses operadores tem a mesma precedencia

// Mudando a precedencia

console.log(num1 + (num2 * num3)); // as operacoes dentro de parenteses tem prioridade sobre as outras 

// Incremento (++) - Adicionar 1 ao valor de uma variavel 

let contador = 1; 
contador++; // somando mais 1 a variavel
console.log(contador); 
contador++; // +1 ...
// Não é possivel utilizar o operador de incremento com constantes

// Diferenças entre o pos fixado e pre fixado:
// se desejarmos exibir no console diretamente nao podemos usar o pos fixado pois ele primeiro vai exibir e depois executar o incremento
contador = 0; // zerando o contador para mostrar
console.log(contador++); // aqui ele vai exibir primeiro o valor do contador e depois somar, então ao inves de ele mostrar 1, ele vai exibir o 0 e depois somar mais 1
console.log(contador); // agora ele esta mostrando o valor incrementado
contador = 0; // zerando contador mais uma vez
console.log(++contador); // agora sim, primeiro ele encrementa e depois ele exibe e assim ele consegue exibir e incrementar no console.log() ao mesmo tempo

// Decremento (--) - Diminuir menos 1 ao valor do contador 
contador = 10; // atualizando o valor para exemplos

contador--; // Aqui podemos ver o valor de 10 se tornar 9 pois decrementamos ele
console.log(contador); // exibindo

console.log(--contador); // e aqui estamos usando a forma pre fixada para poder decrementar o valor e exibir no mesmo console.log()
console.log(contador); // o mesmo valor atualizado

// O pre encremento e o pos encremento só vão ter diferenças se estivermos precisando fazer isso na mesma chamada, mas isso não é uma boa pratica de programação, utilize sempre mais de uma chamada.

// Incremento ou decremento de mais de um valor

contador = 0; // zerando 
contador = contador + 2; // incrementando mais dois, porem essa sintaxe é melhor:
contador += 2; // incrementa da mesma forma
console.log(contador);
contador -= 2; // decrementa da mesma forma
console.log(contador);

// Fazendo isso com outros operadoes aritmeticos 

contador = 2; // atualizando valor pra testes 

contador *= 2; // é o mesmo que escrever contador = contador * 2
contador /= 2; // é o mesmo que escrever contador = contador / 2; 
contador **= 2; // é o mesmo que escrever contador = contador ** 2 (contador elevado a 2)
contador %= 2; // é o mesmo que escrever contador = contador % 2 (resto de contador dividido por 2)

// Operadores de atribuição

/*
    O = é um operador de atribuição (lemos: recebe), esses outros são variações 

    +=
    -=
    /=
    *=
    %=
    **=

*/

// NaN - Not a Number (não é um número)

const numero = 10; 
const numero2 = 'Nelson'; 
console.log(numero * numero2); // Resultado: NaN - Sempre que isso ocorrer significa que há algum erro nos nossos calculos, porem em alguns casos isso vai funcionar

const numero3 = 10;
const numero4 = '10'; // o javascript vai converter isso para number se tentarmos calcular
console.log(numero3 * numero4); // 100 - Porém, o ideal é não deixar isso acontecer, sempre resolva esses problemas manualmente

// Convertendo numeros
// parseInt() - convertendo para um inteiro
// parseFloat() - convertendo para um decimal
// Number() - conversão automatica porem é mais rigoroso

// ParseInt()
const converterInteiro = parseInt('10.2'); // vai converter para 10
const converterInteiro2 = parseInt('10 nelsons'); // vai ignorar completamente as strings e converter somente o numero para 10
const converterInteiro3 = parseInt('nelson'); // nesse caso vai retornar o NaN 

console.log(converterInteiro, converterInteiro2, converterInteiro3); // exibindo 

// parseFloat()
const converterFlutuante  = parseFloat('10.2'); // Vai converter para 10.2
const converterFlutuante2 = parseFloat('10.4 abc') // vai converter para 10.4 e ignorar o restante da string 
const converterFlutuante3 = parseFloat('nelson'); // vai retornar NaN

console.log(converterFlutuante, converterFlutuante2, converterFlutuante3)

// Number() - Converte com rigorosidade
const converterNumber = Number('10.4'); // conversao normal
const converterNumer2 = Number('10'); // conversao normal 
const converterNumber3 = Number('10 anos'); // vai resultar em NaN
const converterNumber4 = Number('Nelson'); // vai resultar em NaN

console.log(converterNumber, converterNumer2, converterNumber3, converterNumber4)

// Obs: nunca tente converter em numeros strings assim: '10 anos' apesar do javascript tolerar texto misturado em alguns casos