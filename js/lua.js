const lua = document.querySelector("#lua");
const msg = document.querySelector(".mensagem");

const cores = [
    "none",
    "sepia(100%) hue-rotate(310deg) saturate(200%)  brightness(1.0) drop-shadow(0 0 35px #f52fca", // rosa
    "sepia(100%) hue-rotate(310deg) saturate(200%) brightness(1.0) drop-shadow(0 0 50px #ff0033)", // vermelho
    "sepia(100%) hue-rotate(310deg) saturate(200%) brightness(1.0) drop-shadow(0 0 50px #9d26ec)", // roxo
    "sepia(100%) hue-rotate(310deg) saturate(200%) brightness(1.0) drop-shadow(0 0 35px #deca2e ", // amarelo
];

// Contador para saber em qual cor está
let contCor = 0;

lua.addEventListener("click", () =>{
    msg.style.display = "none"; 

    contCor += 1;

    if(contCor >= cores.length){
        contCor = 0;
    }

    lua.style.filter = cores[contCor];
})