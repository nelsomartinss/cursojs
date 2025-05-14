const primeiroNome = 'Nelson';
const segundoNome = 'Martins';
const idade = 24; 
const peso = 53;
const altura = 1.74;

// Essas const poderiam ser let se desejassemos criar a variavel e somente iniciar com o calculo depois
const indiceMassaCorporal = peso / (altura ** 2); 
const anoDeNascimento = 2025 - idade;

console.log(`\n${primeiroNome} ${segundoNome} tem ${idade} anos, pesa ${peso}Kg\ntem ${altura} de altura e seu IMC é de ${indiceMassaCorporal.toFixed(2)}\n`); 

console.log(`${primeiroNome} ${segundoNome} nasceu em ${anoDeNascimento}.`);

// Usamos template strings para exibir tudo
// Usamos o operador ** (exponencial)
// Usamos o \n para quebrar a linha
// Usamos o toFixed() para colocarmos apenas 2 casas decimais apos a virgula

