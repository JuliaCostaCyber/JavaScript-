// IMC
function calcularIMC(peso, altura) {

    let imc = peso / (altura * altura);


    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25.0 && imc <= 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30.0 && imc <= 34.9) {
        classificacao = "Obesidade grau 1";
    } else if (imc >= 35.0 && imc <= 39.9) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }

    alert("Seu IMC é: " + imc.toFixed(2) + "\nClassificação: " + classificacao);

}

let pesoDigitado = parseFloat(prompt("Digite seu peso em kg:"));
    let alturaDigitada = parseFloat(prompt("Digite sua altura em metros:"));

    calcularIMC(pesoDigitado, alturaDigitada);

    
// TABUADA
    function exibirTabuadaEscolhida() {

    let tabuadaescolhida = parseInt(prompt("Digite um numero da tabuada desejada: "));



    console.log(`//========TABUADA X ${tabuadaescolhida}=======`);

    for (let i = 1; i <= 10; i++) {
        //      2 x 4 =
        console.log(tabuadaescolhida + " X " + i + " = " + (tabuadaescolhida * i));
    }
}

//SEQUÊNCIA
function ConferirSequencia() {
    let primeiroNumero = Number ( prompt("Digite o primeiro número "));
let segundoNumero = Number ( prompt("Digite o segundo número "));
let terceiroNumero = Number ( prompt("Digite o terceiro número "));

if (primeiroNumero < segundoNumero && segundoNumero < terceiroNumero) {
     alert("Os números estão em ordem crescente")
}

if (primeiroNumero > segundoNumero && segundoNumero > terceiroNumero) 
alert ("Os números estão em ordem decrescente")

if (primeiroNumero <= segundoNumero && segundoNumero >= terceiroNumero) {
     alert (" Os números estão em ordem aleatória")
};
}

//DESCONTO
function DescontoNaCompra() {
    let valortotalcompra = parseFloat(prompt("Digite o valor total da compra: "))

let desconto;

if (valortotalcompra <= 100) {
    desconto = 0
}

//else if(valortotalcompra > 100 && valortotalcompra <= 200 )
else if(valortotalcompra <= 200)
{
//desconto = 10/100;
desconto = 0,1;
}

else{
//desconto = 20/100
desconto = 0.20
}

let valorfinal = valortotalcompra - (valortotalcompra*desconto)

alert(valorfinal);
}

//CONFERIR O NOME
function ConferirNome() {
    let usarname = prompt("Dgite o seu usuário: ")

let senha = prompt("Digite sua senha: ")

if(usarname == "admin" && senha == "senha123"){
     console.log("login Bem-Sucedido!")
}

else{
    console.log("Login incorreto! ")
}   
}
