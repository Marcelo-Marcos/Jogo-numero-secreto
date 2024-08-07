let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}    

function modificarCorDoTexto(id, cor) {
    let corDoTexto = document.getElementById(id);
    corDoTexto.style.color = cor;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        modificarCorDoTexto('cor-titulo', '#9CDBA6');
        modificarCorDoTexto('alerta', '#9CDBA6');
        exibirTextoNaTela('h1', 'Acertou!');
       
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;

        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('jogar').setAttribute('disabled', true);
    }
    else if (chute == `` || chute == 0) {
        let mensagemDeAlertaTitulo = `Atenção!`;
        let mensagemDeAlerta = `Por favor digite um número entre 1 e ${numeroLimite}!`;
        
        exibirTextoNaTela(`h1`, mensagemDeAlertaTitulo);
        exibirTextoNaTela(`p`, mensagemDeAlerta);
        modificarCorDoTexto('cor-titulo', '#f08282');
        modificarCorDoTexto('alerta', '#f08282');
    }else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
        modificarCorDoTexto('alerta', '#ffffff');
        modificarCorDoTexto('cor-titulo', '#ffffff');

        let verAtencao = document.querySelector('h1').value;
        let verSeAtencao = verAtencao == `Atenção!` ? 'Jogo do número secreto' : 'Jogo do número secreto';
        exibirTextoNaTela('h1', verSeAtencao);
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);

        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    modificarCorDoTexto('alerta', '#ffffff');
    modificarCorDoTexto('cor-titulo', '#ffffff');
    document.getElementById('jogar').removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}