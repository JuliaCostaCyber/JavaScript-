// eventos são interações do usuário com o website
//  e também comportamentos do website, por exemplo carregar a tela

let elementoBtn = document.getElementById("btn");
let elementoIdLeandra = document.getElementById("Tecnica");
let novoElemento = document.createElement("a");
novoElemento.textContent = "Bruno Mars - Marry You";
novoElemento.href = "https://www.youtube.com/watch?v=dElRVQFqj-k&list=RDdElRVQFqj-k&start_radio=1";

elementoBtn.addEventListener("click", () => {
    //  alert("Você clicou no botão");

    // elementoBtn.style.backgroundColor = "purple"

    document.body.appendChild(novoElemento);
    // document.body.removeChild(elementoIdLeandra)
console.log(document.body.children);

document.body.children[1].removeChild(elementoIdLeandra)






})





