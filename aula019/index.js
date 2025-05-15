// Operadores de comparacao

/*
    > maior que
    < menor que 
    >= maior ou igual a
    <= menor ou igual a 
    == igualdade (VAMOS USAR POUCO)
    === igualdade de valor e tipos (igualdade estrita)
    != diferente (VAMOS USAR POUCO)
    !== diferente de valor e tipos (diferença estrita)

    Obs: O sinal de '=' sozinho é um sinal de atribuição
    Obs: Os sinais de === e != vão ser mais uteis que os tradicionais == e !=

*/

console.log(10 > 5); // 10 é maior que 5? True 
console.log(5 < 10); // 5 é menor que 10? True
console.log(10 >= 10); // 10 é maior ou igual a 10? True (ele nao é maior mas é igual)
console.log(9 <= 15); // 9 é menor ou igual a 15? True (ele não é igual mas é menor)

console.log(5 == 5); // 5 é igual a 5? True 
console.log(5 == '5'); // 5 é igual a '5' (string)? True. O sinal de == é um sinal de igualdade fraca, logo se colocarmos 5 com '5' o proprio javascript vai tentar fazer uma conversão de tipos e por isso ele ver 5 e '5' iguais. NUNCA DEVEMOS FAZER ISSO, por isso, usamos o sinal de igualdade estrita 
console.log(5 === '5'); // 5 é igual a '5' em valor e tipo? false. O 5 number nao é igual a '5' string, sao tipos diferentes

console.log(5 != '5'); // 5 é diferente de '5'? false. Da mesma forma que o sinal de ==, o sinal != é um sinal de diferença fraco, ele vai tentar fazer um conversao fazendo com que 5 e '5' sejam iguais. NUNCA PODEMOS FAZER ISSO. Por isso, usamos o sinal de diferença estrita 
console.log(5 !== '5'); // 5 é diferente de '5' em valor e tipo? true. O 5 number é diferente de '5' string, tipos diferentes.

// Conclusão: Evite o uso de == e != para nao ter problemas, cheque as diferenças sempre com === e !==. 



