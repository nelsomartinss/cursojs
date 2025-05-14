// A janela que se chama window é o elemento pai de todos os outros elementos que estão na aba 

// O objeto document esta dentro window, ele se refere ao documento html e dentro do html temos o body

// capturando body
const body = document.body; 
// escrevendo dentro do body com a propriedade innerHTML
// innerHTML é uma propriedade do DOM, ele permite que lemos ou alteremos o conteúdo HTML de um elemento
body.innerHTML = 'Olá, mundo';
body.innerHTML = 'Qualquer outra coisa'; // sempre que dermos um inner html ele substituira o texto
body.innerHTML = '<h1>Exercicios com Strings</h1>';
// adicionando um titulo junto com duas quebras de linha

// Exercicio - Dissecando String e escrevendo no documento HTML

const nome = prompt('Digite seu nome completo: '); 
document.body.innerHTML += `Seu nome é <strong>${nome}</strong><br>`;
document.body.innerHTML += `Seu nome possui <strong>${nome.length}</strong> letras<br>`;
document.body.innerHTML += `A segunda letra do seu nome é <strong>"${nome[1]}"</strong> <br>`;
document.body.innerHTML += `O primeiro indice da LETRA 'N' do seu nome é <strong>${nome.indexOf('N')}</strong><br>`;
document.body.innerHTML += `O último indice da LETRA 'N' do seu nome é <strong>${nome.lastIndexOf('N')}</strong><br>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são <strong>"${nome.slice(-3)}"</strong><br>`; 
document.body.innerHTML += `As palavras do seu nome são <strong>${(nome.split(' ')).join(", ")}</strong><br>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong><br>`;
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong><br>`;