// function exibirTabuadaEscolhida(){

// let tabuadaescolhida = parseInt(prompt("Digite um numero da tabuada desejada: "));

// console.log(`//========TABUADA X ${tabuadaescolhida}=======`);

// for(let i = 1; i <= 10; i++){
//     //      2 x 4 =
//     console.log(tabuadaescolhida + " X " + i + " = " + (tabuadaescolhida * i ));
// }
// }

// exibirTabuadaEscolhida();

// crie uma funcao para que solicite o nome da pessoa e exibam

// function exibirNomeDoUsuario(){

//     let nomeSolicitado = prompt("Digite seu nome: ")

//     return nomeSolicitado;
// }

// let nome = exibirNomeDoUsuario();

// alert(nome);

// com parametros
function SomarDoiasNumeros(numero01, numero02) {

    console.log(numero01 + numero02);

}

//passando valores via parametro
SomarDoiasNumeros(10, 10);


// Crie uma função para o exercicio 08 de Estrutura 
// Condicional
// Passe via parametro o peso e a altura

// 1 coisa a se fazer - criar a estrutura da funcao com os seus devidos parametros




function CalcularIMC(peso, altura) {
   
    let IMC = Peso / (Altura * Altura);

    if (IMC < 18.5) {
        alert("Abaixo do peso")
    }

    else if (IMC >= 18.5 && IMC <= 24.9) {
        alert("Peso Normal")
    }

    else if (IMC >= 25 && IMC <= 29.9) {
        alert("Sborepeso")
    }

    else if (IMC >= 30.0 && IMC <= 34.9) {
        alert("Obesidade grau 1")
    }

    else if (IMC >= 35.0 && IMC <= 39.9) {
        alert("Obesidade grau 2")
    }

    else {
        alert("Obesidade grau 3, se cuide sua vida está em risco")
    }

}


let Peso = parseFloat(prompt("Digite seu peso em quilograma: "))
let altura = parseFloat(prompt("Digite a sua altura: "))

CalcularIMC(peso, altura)