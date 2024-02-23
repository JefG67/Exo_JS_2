const box = document.createElement("div")
const result = document.createElement("div")
box.classList.add("box")




const board = document.querySelector("#board")

const couleurs = ["#069090", "#cc0a0a", "#0abd07", "yellow"];
for (let i = 0; i <= 3; i++) { 
    let newbox = box.cloneNode()
    newbox.innerText = " "
    newbox.style.backgroundColor = couleurs[i]; // pour acceder au style css de chaque nouvelle box a laquelle je lui ajoute les valeur de mon tableau
    board.appendChild(newbox)
}


let results = box.cloneNode();
results.innerText = " ";
board.appendChild(results);




