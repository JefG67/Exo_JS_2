const box = document.createElement("div")

box.classList.add("box")

const board = document.querySelector("#board")
const board2 = document.querySelector("#board2")



// je cree un tableau dans lequel j'ajoute mes couleurs
const couleurs = ["#069090", "#cc0a0a", "#0abd07", "yellow"];
// je cree une boucle pour cloner 4 box
for (let i = 0; i <= 3; i++) { 
    let newbox = box.cloneNode()
    newbox.innerText = " "
    newbox.style.backgroundColor = couleurs[i]; // pour acceder au style css de chaque nouvelle box a laquelle je lui ajoute les valeur de mon tableau
    board.appendChild(newbox)
}

//creation de ma 5 eme box
board2.appendChild(box);


function switchCouleur(){
    
}





let style = window.getComputedStyle(element)

function infoCarre(){
    const backgroundColor = style.backgroundColor

}

