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
paragrapheInstruction.textContent = `Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter.`;
document
  .getElementById("description_boutique")
  .appendChild(paragrapheInstruction);
// console.log(paragrapheDeBienvenue.textContent);
// console.log(paragrapheInstruction.textContent);

/**
 * Exercice 3 - Roger, enfoiré !
 */

const removePacotille = document.querySelector("#blague_de_roger_le_sorcier");
// console.log(removePacotille.textContent);
removePacotille.remove();

/**
 * Exercice 4 - Archibald n'est pas là, appelons le !
 */

const callArchibald = document.querySelector("#call_archibald");
callArchibald.addEventListener("click", alertCallArchibald);
function alertCallArchibald() {
  alert(`🧙‍♂️ J'arrive, j'arrive Aventurier !`);
}

/**
 * Exercice 5 - Faisons un peu de magie 🪄
 */

const boitesMagiques = document.querySelectorAll("#boites_magique .boite");
console.log(boitesMagiques);

document
  .querySelectorAll("#btn_change_blue , #btn_change_red , #btn_change_green")
  .forEach((button) =>
    button.addEventListener("click", () => {
      switch (button.id) {
        case "btn_change_red":
          boitesMagiques[0].style.backgroundColor = "red";
          //   console.log("testred");
          break;

        case "btn_change_blue":
          for (let i = 0; i < 2; i++) {
            boitesMagiques[i].style.backgroundColor = "blue";
          }
          //   console.log("testbleu");
          break;

        case "btn_change_green":
          boitesMagiques.forEach((boite) => {
            boite.style.backgroundColor = "green";
          });
          //   console.log("testvert");
          break;

        default:
          break;
      }
    })
  );
