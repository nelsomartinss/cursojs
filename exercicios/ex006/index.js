// Esse exercicio tem como objetivo praticar o basico funções, arrays e objetos

// Capturando elementos
const formulario = document.querySelector('#formulario'); // capturando formulario
const objetos = document.querySelector('#objetos'); // elemento que ira receber os textos

// funcao que cria paragrafo
const criarParagrafo = (nome, sobrenome, peso, altura) => {
    const paragrafo = document.createElement('p'); 
    paragrafo.textContent = `${nome} ${sobrenome} pesa ${peso} e possui ${altura}cm de altura.`; 
    objetos.appendChild(paragrafo);
};

// funcao que pega cria objetos e coloca dentro de uma array 
const arrayDosObjetos = [];
const arrayComObjetos = (nome, sobrenome, peso, altura) => {
    const objeto = {nome, sobrenome, peso, altura}; 
    arrayDosObjetos.push(objeto); 
};

// evento de envio
formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // quando o envio do formulario for feito o preventDefault vai impedir recarregamento da pagina

    // capturando os valores sempre que o envio for feito
    const nome = document.querySelector('#nome').value;
    const sobrenome = document.querySelector('#sobrenome').value;
    const peso = Number(document.querySelector('#peso').value);
    const altura = Number(document.querySelector('#altura').value);

    // Exibindo elementos
    criarParagrafo(nome, sobrenome, peso, altura);

    // Criando array com objetos
    arrayComObjetos(nome, sobrenome, peso, altura);
    console.log(arrayDosObjetos);
});