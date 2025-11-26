// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.



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
}