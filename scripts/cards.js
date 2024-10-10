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
`

// J'ai oublié comment c'est le reste

for (i = 0; i < restaurant.lenght; i++ ) { 

}

card.outerHTML = card; 
