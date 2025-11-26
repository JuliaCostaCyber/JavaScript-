// Exercício 3: Ímpar ou par
// Faça um programa que receba um número do usuário e informe se este número é par ou
// ímpar.

let numero = parseInt(prompt("Digite qualquer número"));

if (numero % 2 == 0) {
    alert("O número " + numero + " é PAR.");
} else {
    alert("O número " + numero + " é ÍMPAR.");
}

