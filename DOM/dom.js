// DOM é a arvore/fluxo do meu documento HTML 
// Ele serve para que o JavaScript consiga manipular (vizualizar, editar, criar, excluir)
// O DOM torna os elementos HTML em objetos para que o JS consiga acessar de fato 

//------------------------------------------------------------------------------------//

let elementoBody = document.getElementsByTagName("body");

console.log(elementoBody);

//acessar pela tag h1
let elementoh1 = document.getElementsByTagName("h1");

//acessando o elemento pela sua posicao
elementoh1[0].textContent = "Hello Word ❤️";
// console.log()

//-------------------------------------Desafio--------------------------------------//

// exibir o id tecnica

let exibeId = document.getElementById("Tecnica")
console.log(exibeId);

// exibir os elementos que possuem a class jogador

let exibeClass = document.getElementsByClassName("Jogador")
console.log(exibeClass);

// exibir o item 4 dos elementos a class jogador

let quatroJogadores = document.getElementsByClassName("Jogador")
console.log(quatroJogadores[4].textContent);

// mudar o texto do conteudo do item da 3 posição dos elementos que possuem a class jogador

exibeClass[3].textContent = "Julia"

// mudar a estilização de um elemento

exibeId.style.color = "red";
exibeId.style.fontSize = "25px";

// mude a cor da fonte do item da 3 posicao dos elementos que possuem a class jogador
exibeClass[3].style.color = "red"