// Operadores lógicos 

/*
    && / and / e  
    || / or  / ou 
    !  / not / negação
    !! / dupla negacao
*/

console.log(10 < 11 && 5 < 6); // 10 menor que 11 e 5 menor que 6? se os dois lados forem true entao o resultado da operacao é true, se qualquer um dos lados forem false, entao o resultado é false, e se os dois lados forem false entao o resultado é false. 

console.log(10 > 5 || 10 < 5); // 10 maior que 5 ou 10 menor que 5? se um dos dois lados for true entao o resultado da operacao é true, se os dois lados forem true, entao o resultado da operacao é true, somente se os dois lados forem false que o resultado sera false

console.log('\n'); // pulando linha

console.log(!false); // se algo for false, o operador de negacao transforma em true - ele inverte o valor logico de uma expressao
console.log(!true); // se algo for true, o operador de negação transforma em false - ele inverte o valor logico de uma expressao
const numeroUm = 1; // isso é true 
console.log(numeroUm, !numeroUm); // transformou em false
const zero = 0; // isso é false
console.log(zero, !zero); // transformou em true
const stringVazia = ''; // uma string vazia é false
console.log(stringVazia, !stringVazia); // ele transforma em true
const meuNome = 'Nelson'; // isso é true
console.log(meuNome, !meuNome); // transformou em false
const nulo = null; // null é false
console.log(nulo, !null); // transformou em true
const indefinido = undefined; // undefined é false
console.log(indefinido, !indefinido); // transformou em true

console.log('\n');

// Convertendo valores normais para um valor booleano com a dupla negação (!!)
// Um ! inverte o valor e o outro ! inverte de novo, isso converte um valor thruthy em falsy, vice versa 

console.log(!!'Nelson'); // Nelson é uma string nao vazia, isso é true. Se colocarmos um ! ele se torna false, e se colocarmos outro ! ele volta a ser true, o operador vai criar uma representacao booleana para esse valor, podemos guardar essa representacao em uma variavel:
const nomeConvertido = !!'Nelson'; // a variavel vai guardar o valor convertido, que é true
console.log(nomeConvertido);// exibindo representacao booleana

// o mesmo serve para quando um valor é originalmente falsy, um ! inverte pra true e o outro ! converte o valor para false

console.log(!!''); // string vazia é falsy, mas assim convertemos ela para true e depois para false, porem agora existe uma representacao booleana para esse valor que é true
const stringFalse = !!''; // false 
console.log(stringFalse); // exibindo representacao booleana

console.log('\n')

// isso acima é como se escrevessemos:

console.log(Boolean('')); // string vazia = false
console.log(!!''); // é a mesma coisa

console.log(Boolean('Nelson')); // string nao vazia = true
console.log(!!'Nelson'); // é a mesma coisa 

console.log('\n');

// Números negativos são considerado true por nao ser NaN, nem Null, nem undefined e nem 0. 

console.log(!!-12449); // isso é true