/**
 * Exercice 1 - Quel est le titre de la boutique
 */

const titreH1 = document.querySelector("h1");
// console.log(titreH1.textContent);

/**
 * Exercice 2 - Des informations manquent !
 */

const paragrapheDeBienvenue = document.querySelector("#description_boutique");
const paragrapheInstruction = document.createElement("p");
paragrapheInstruction.textContent= `Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter.`;
document.getElementById("description_boutique").appendChild(paragrapheInstruction);
// console.log(paragrapheDeBienvenue.textContent);
// console.log(paragrapheInstruction.textContent);
