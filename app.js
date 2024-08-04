let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML =  'Escolha um número entre 1 e 10';
*/
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
}

function exibirMensagem() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagem();

function verificarChute() {

    exibirTextoNaTela('h1', 'Jogo do número secreto');

    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('jogar').setAttribute('disabled', true);
        
        let palavraTentativa= tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabens você encontrou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
    }else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `O número secreto é menor`);
        }else{
            exibirTextoNaTela('p', `O número secreto é maior`);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
   return Math.floor(Math.random() * 10) + 1;
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    exibirMensagem();
    limparCampo();

    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('jogar').removeAttribute('disabled');
}