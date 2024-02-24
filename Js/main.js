const box = document.createElement("div") //cree un nouvel element que je stock dans une variable
box.classList.add("box")
const resultBox = document.createElement("div")
resultBox.classList.add("box") 

const board = document.querySelector("#board") //je cree une variable qui selectionne l'element #board de mon html
const board2 = document.querySelector("#board2")



// je cree un tableau dans lequel j'ajoute mes couleurs
const couleurs = ["#069090", "#cc0a0a", "#0abd07", "yellow"];
// je cree une boucle pour cloner 4 box a partir de ma variable box cree en haut
for (let i = 0; i <= 3; i++) { 
    let newBox = box.cloneNode()
    newBox.innerText = " ";
    newBox.style.backgroundColor = couleurs[i]; // pour acceder au style css de chaque nouvelle box a laquelle je lui ajoute les valeur de mon tableau
    board.appendChild(newBox) //ajoute chaque nouvel box a mon element #board html
}    


//Ajout de ma 5 eme Box (resultBox) cree  en haut a mon board 2
board2.appendChild(resultBox);

document.querySelectorAll(".box").forEach(function(newBox) { //je selectione mes box de la class "Box" et je leur met un ecouteur d'evenement au clic a chacune 
    
    newBox.addEventListener("click", function() {
        let style = window.getComputedStyle(this) // variable pour retouner le style css de l'element HTML en utilisant getComputedStyle sur la box clické en utilisant this qui represente la box sur lequel utilisateur a cliqué
        let style2 = window.getComputedStyle(resultBox)
        resultBox.style.backgroundColor = style.backgroundColor; //ajout de la couleur de la box clicker a ma box result
        resultBox.innerText = style2.backgroundColor 
    });
});









