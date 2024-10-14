import restaurant from "./restautant";

let card = document.querySelector("#card");

card = `
    <img class="restaurantImg" src="${restaurant[0].img}" alt="Restaurant">
    <h2>${restaurant[0].name}</h2>
    <h3>"Note"</h3>
    <img src="${restaurant[0].note}" alt="note_etoiles"> 
    <p>${restaurant[0].notice}</p>
    <hr>
    <p>${restaurant[0].desc}</p>
`;

// J'ai oublié comment c'est le reste

for (i = 0; i < restaurant.length; i++) {}

//Toute cette dernière partie ne fonctionne pas encore, elle sert à mettre la carte du restaurant dans le boutton //

document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("VoirCarte");
  let VoirCarte = document.getElementById("Carte");

  // Afficher la carte
  button.addEventListener("click", function () {
    if (Carte.style.display === "none" || Carte.style.display === "") {
      Carte.style.display = "block";
    }

    // Cacher la carte
    else {
      Carte.style.display = "none";
    }
  });
});

//CAROUSSEL

<div id="carousel-container">


card.outerHTML = card;
