# <h1 align = "center"> Sorteador de Amigo Secreto </h1>
<p align = "center"> <img width="75%" height="75%" alt="image" src="https://github.com/user-attachments/assets/4d634628-9e7c-442e-b4f6-64774b7ff9e3" /></p>
<p align = "center"> Projeto em Javascript para criar uma lista de amigos e sortear um "Amigo Secreto" no navegador. </p>

## 🔨 Funcionalidades
### 1. `adicionarAmigo()`:
- Captura o valor do campo de entrada.
- Verifica se o campo não está vazio.
- Adiciona o nome ao array `amigos`.
- Adiciona o nome a lista no navegador.
- Limpa o campo de entrada.

### 2. `atualizarLista()`:
- Limpa a lista exibida.
- Cria um novo elemento <li> para cada nome adicionado.
- Usa `appendChild()` para inserir os elementos dentro da lista.

### 3. `sortearAmigo()`:
- Verifica se a lista não está vazia.
- Sorteia um índice aleatório com `Math.random()`.
- Exibe o nome presente no indíce sorteado.

### (Bônus) `reiniciarProcesso()`:
- Limpa o array `amigos` e o campo de entrada.
- Dentro de `adicionarAmigo()` foi inserida a linha de código abaixo, dessa forma, o resultado do sorteio somente será apagado quando um novo nome for adicionado.
  ``` javascript
  document.getElementById('resultado').innerHTML = '';`

## 🚀 Como usar
- Digite o nome de um amigo no campo de entrada.
- Clique em **Adicionar** para incluir o nome na lista.
- Clique em **Sortear** para sortear o amigo secreto.
- Para inciar um novo sorteio insira um novo nome no campo de entrada.

## 📁 Acesso ao projeto
- Você pode [acessar o código fonte](https://github.com/marcelagrg/challenge-amigo-secreto) ou baixar o arquivo [.zip](https://github.com/marcela/meu-projeto/archive/refs/heads/) do projeto.

## 🛠️ Abrir e rodar o projeto
- Extraia o arquivo .zip em uma pasta de sua escolha.
- Localize o arquivo index.html e clique com o botão direito sobre ele.
- Escolha "Abrir com" e selecione o navegador de sua preferência.
- O jogo do Amigo Secreto será iniciado e estará pronto para uso.

## 🧰 Tecnologias Utilizadas
![Tecnologias](https://skillicons.dev/icons?i=html,css,javascript)



