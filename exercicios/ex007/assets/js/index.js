// Capturando elementos
const main = document.querySelector('.container');
const formulario = document.querySelector('.formulario')

// Função que calcula o IMC
const calculoIMC = (peso = 0, altura = 0) => {
    const resultado = (peso / (altura ** 2)).toFixed(2);
    return resultado;
}

// Função que verificar o resultado IMC com base na tabela
const resultadoIMC = (imc) => {
    if(imc < 18.5) return 'Abaixo do peso';
    if (imc >= 18.5 && imc <= 24.9) return 'Peso normal';   
    if (imc >= 25 && imc <= 29.9) return 'Sobrepeso';
    if (imc >= 30 && imc <= 34.9) return 'Obesidade Grau 1';
    if (imc >= 35 && imc <= 39.9) return 'Obesidade Grau 2';
    if (imc > 40) return 'Obesidade Grau 3';
}
    
// Função que escreve o resultado do calculo e da verificação na tela
const escreverResultadoNaTela = (imc, resultado) => {
    let paragrafoResultado = document.querySelector('#paragrafoResultado');

    if(!paragrafoResultado){
       paragrafoResultado = document.createElement('p'); 
       paragrafoResultado.id = 'paragrafoResultado'
       main.appendChild(paragrafoResultado); 
    }

    if (imc > 0 && resultado){
        paragrafoResultado.style.backgroundColor = 'green';
        paragrafoResultado.style.color = 'white';
        paragrafoResultado.textContent = `Seu IMC é de ${imc} - ${resultado}`; 
        
    } else {
        paragrafoResultado.textContent = `Peso e altura inválidos, tente novamente!`
        paragrafoResultado.style.backgroundColor = 'red';
        paragrafoResultado.style.color = 'white';
        paragrafoResultado.textContent = textoParaValorInvalido; 
    } 
} 

// Evento de envio que executará as funções
formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const peso = Number(document.querySelector('#peso').value); 
    const altura = Number(document.querySelector('#altura').value); 

    const imc = calculoIMC(peso, altura);
    const resultado = resultadoIMC(imc);
    escreverResultadoNaTela(imc, resultado);
})


