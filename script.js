const keysNumber = document.querySelectorAll(".keys");
const btns = document.querySelectorAll(".btn")

const display = document.getElementById("resultado");
const historico = document.getElementById("historico");

const apagar = document.getElementById("apagar");
const igual = document.getElementById("igual")


apagar.addEventListener("click", clear)
igual.addEventListener("click", resultado)

keysNumber.forEach(function(item){
    item.addEventListener("click", clicou);
})

btns.forEach(function(item){
    item.addEventListener("click", clicou )
})

function clicou (){
    display.innerHTML += this.innerHTML;
}

function clear (){
    display.innerHTML = "";
    historico.innerHTML = "";
}


function resultado(){

    if(display){
        historico.innerHTML += display.innerHTML + " | "
        display.innerHTML = eval(display.innerHTML)
    }

}
