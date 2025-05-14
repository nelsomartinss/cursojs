// Capturando elementos
const numero = document.querySelector("#numero");
const textos = document.querySelector("#textos");

// Input e saída do input
// const numeroInput = Math.round(Math.random() * (100 - 1) + 1);
const numeroInput = Number(prompt('Digite um número:'));
numero.textContent += `${numeroInput}`; // usamos text content quando não precisamos adicionar tags html ao texto

// Processamento e saída
textos.innerHTML = `<p>A raiz quadrada do seu número é <strong>${Math.round(Math.sqrt(numeroInput))}</strong></p>`;

textos.innerHTML += `<p>O número é inteiro?  <strong>${Number.isInteger(numeroInput)}</strong></p>`;

textos.innerHTML += `<p>Pode ser classificado como NaN? <strong>${isNaN(numeroInput)}</strong></p>`; // se recebermos uma string aqui a operacao Number.isNaN vai retornar false mesmo sendo uma string por que assim ele vai tentar converter para numero, por isso precisamos usar apenas isNaN()

textos.innerHTML += `<p>O número arredondado para baixo é <strong>${Math.floor(numeroInput)}</strong></p>`;

textos.innerHTML += `<p>O número arredondado para cima é <strong>${Math.ceil(numeroInput)}</strong></p>`;

textos.innerHTML += `<p>O número com duas casas decimais é <strong>${numeroInput.toFixed(2)}</strong></p>`;