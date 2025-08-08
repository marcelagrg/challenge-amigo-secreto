//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let input = document.querySelector('input');
    let nome = input.value;

     document.getElementById('resultado').textContent = ''; //Limpa o campo resultado quando um nome é inserido após um sorteio.

    if (nome == '') {
        alert('Por favor, insira um nome válido.');
        return;
    } else {
        amigos.push(nome);
        atualizarLista();
        input.value = '';
    }
}

function atualizarLista() {
    let listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaDeAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert('Por favor, insira um nome antes de realizar o sorteio.');
        return;
    } else {
        let sortearIndice = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[sortearIndice];
        document.getElementById('resultado').innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
    }
    reiniciarProcesso();
}

function reiniciarProcesso() {
    amigos = [];
    if (amigos.length == 0) {
        document.getElementById('listaAmigos').innerHTML = '';
        document.querySelector('input').value = '';
    } else {
        document.getElementById('resultado').textContent = '';
    }


}
