// Atribuir valor ao h1 do html linha 11
let cabeca = document.querySelector('h1');
cabeca.innerHTML = 'Hora do Desafio';

// Função para o botão console do html linha 14
function botaoConsole() {
    console.log('O botão foi clicado');
}

// Função para o botão alerta do html linha 15
function botaoAlerta() {
    alert ('Eu amo JS');
}

// Função para o botão prompt do html linha 16
function botaoPrompt() {
    let cidade;
    cidade = prompt('Digite um nome de uma cidade no Brasil');
    alert (`Estive em ${cidade} e lembrei de você`);
}

// Função para o botão soma do html linha 17
function botaoSoma() {
    let num1;
    let num2;
    let soma;
    num1 = parseInt(prompt('Digite um o primeiro número inteiro para somar'));
    num2 = parseInt(prompt('Digite um o segundo número inteiro para somar'));
    soma = num1 + num2;
    alert (`A soma de ${num1} com ${num2} é igual a ${soma}`);
}