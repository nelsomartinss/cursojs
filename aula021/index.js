// if e else
// estruturas condiconais são blocos de código que só serão executados se uma condição for verdadeira, o programa toma decisões com base nisso

// se algo for verdadeiro então faça {} se não for então faça {}

if (10 > 5){ // se essa condição for verdadeira
    console.log('Olá, mundo'); // ele executa essa linha
} else { // se a condição for falsa
    console.log('Olá, pessoas!'); // ele executará essa linha
}

// Exemplo com idade 
const idade = 18; 

if (idade >= 18){ // se a idade for maior ou igual a 18
    console.log('Você é maior de idade'); // é maior de idade 
} else {
    console.log('Você é menor de idade!'); // se não for maior ou igual a 18, é menor de idade
}

// Podemos fazer condições aninhadas (varias condições) com else if
// Criaremos vários blocos para serem feitas várias verificações

const nota = 1;  // definimos nota com valor 7

if (nota >= 9){ // se essa nota for maior ou igual a 9 e menor ou igual 10
    console.log('excelente'); // exibira no console
} else if (nota >= 7 ){ // se for maior ou igual a 7
    console.log('aprovado'); // exibira no console
} else if (nota <= 6){ // se for 6 ou menor que isso
    console.log('recuperação'); // exibira no console
}

// tudo que estiver dentro do bloco com condição verdadeira vai ser executado.

// Valores que estão entre valores 

const hora = 16; 

if (hora >= 12 && hora <= 15){ // estamos verificando se duas condições são verdadeiras, então a hora precisa estar entre 12 (maior ou igual a 12) e 15 (menor ou igual a 15)
    console.log('Esse horario esta entre meio dia e tres da tarde'); // se a condição for verdadeira ele exibe essa mensagem
} else {
    console.log('esse horario passou do limite'); // se não, ele exibe esse bloc 
}

// if pode ser usado sozinho
// else if nao pode ser executado sozinho, preciso de um if antes
// else nao pode ser executado sozinho, preciso de um if antes
// eu posso ter quantos else ifs eu quiser no meu código
// eu so posso ter um else por ultimo na condição
// podemos usar apenas if e else

// Mais de um bloco verdadeiro
// Se mais de um bloco for verdadeiro ele só ira executar o primeiro e encerrará a checagem

const numero = 10

if (numero >= 0 && numero <= 5){ // condição falsa
    console.log(numero);
} else if (1 === 1){ // (LITERAL), isso é uma condição verdadeira literal apenas para testes 
    console.log('literal'); // isso será exibido no console
} else if (numero >= 10){ // condição verdadeira, porém, o lugar dela foi tomado pela condição verdadeira acima, logo, ele irá ignorar totalmente essa condição e executará so a primeira
    console.log(numero);
} else {
    console.log('teste');
}

// se desejarmos checar duas coisas verdadeiras precisariamos ter dois ifs

// Agora esse if é independente dos outros
if (1 === 1){ // (LITERAL), isso é uma condição verdadeira literal apenas para testes 
    console.log('literal'); // isso será exibido no console
}

if (numero >= 0 && numero <= 5){ // condição falsa
    console.log(numero);
} else if (numero >= 10){ // condição verdadeira
    console.log(numero);
} else {
    console.log('teste');
}