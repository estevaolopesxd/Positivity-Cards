const cards = document.querySelector(".caixa__card")
const caixaCard = document.querySelector(".caixa__card")









function exibirMsg(){

    cards.addEventListener("click", () => {
    caixaCard.style.removeProperty("-webkit-animation-name")
        console.log("clique")
       
    })
}
exibirMsg()



