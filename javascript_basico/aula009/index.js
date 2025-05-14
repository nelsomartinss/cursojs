// alert, confirm, prompt - Isso não existe no node, por isso usaremos no navegador

// Dentro do navegador existe um elemento que é pai de todos os outros elementos, esse elemento se chama 'window' (que é a janela do navegador), é ele quem fornece acesso ao DOM.

alert('exibindo mensagem na tela'); // a função alert() exibe uma caixa de mensagem na tela 
// quando possui parenteses ou chamamos de funçao ou de método
// alert() na verdade é um atalho para window.alert(), o alert() é um método do objeto window
// dentro do objeto window existe inumeros metodos e elementos

const confirmando = confirm('Tenha uma boa noite!'); // esse método também é um atalho para window.confirm()
// quando usamos esse método ele exibe duas opções para o usuario 'ok' e 'cancelar', quando o usuario seleciona 'ok' o valor é 'true' e quando ele seleciona cancelar o valor é 'false'
alert(confirmando); // usando o alert() para mostrar o valor que o usuario digitou

const nome = prompt('Digite o seu nome:'); // prompt() também é um atalho de window.prompt()
// quando usamos esse método ele exibe uma caixa de texto para que o usuário digite algo, com isso nos podemos armazenar em variaveis os inputs vindo do teclado do usuario
// tudo que entra do teclado é considerado string, até mesmo quando o usuário não digita nada o resultado é uma string vazia
// Porem se o usuario clicar em cancelar o resultado é 'null'
// Isso já indica que se desejamos um numero, precisamos converter
alert(typeof nome); // string ou null (object), porem, lembre-se que isso é um bug do javascript, null não é um objeto
alert(nome); // valor

// funções podem retornar valores ou não
/*
    alert() - retorna undefined
    confirm() - retorna true ou false
    prompt() - retorna uma string seja ela com valor ou vazia, sempre string, se clicar em cancelar retorna null

*/