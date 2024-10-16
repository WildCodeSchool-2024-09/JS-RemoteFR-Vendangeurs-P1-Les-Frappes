// import createCard from "./createCard";
// import restaurant from "./restautant";

// const cardsContainer = document.querySelector('#cards');
// const frenchRestaurant = document.querySelector('#france');

// function displayCards() {

//     const frenchChecked = frenchRestaurant.checked;

// const filterRestaurant = restaurant.filter(({name, type}) => {
// const matchChecked = !frenchChecked || type === 'france';

// return matchChecked;
// })

// cardsContainer.innerHTML = "";

// filterRestaurant.forEach((restaurant) => {
//     cardsContainer.appendChild(createCard(restaurant));
// })

// }

// frenchChecked.addEventListener("change", displayCards);

// displayCards();

import restaurant from "./restaurant.js";

const container = document.querySelector("#cards-container");

const cardsArray = [];

for (let i = 0 ; i < restaurant.length ; i++){
    cardsArray.push(`
        <div class="splide__slide card">
               <div>
                 <img class="image-container" src="${restaurant[i].image}" alt="${restaurant[i].alt}" />
               </div>
               <div class="desc-container">
                 <h2 class="name-restaurant">${restaurant[i].name}</h2>
                 <div class="note-responsive">
                   <div class="note-container">
                     <p>Note du petit Frappé</p>
                     <img class="note-image" src="${restaurant[i].noteFrappe}" alt=""/>
                   </div>
                   <div class="note-container">
                     <p>Note Google</p>
                     <p>${restaurant[i].noteGoogle}</p>
                   </div>
                   <div class="avis">
                     <p>${restaurant[i].avis}</p>
                   </div>
                 </div>
                 <hr />
                 <div class="text-desc">
                   <h3>Description</h3>
                   <p>
                     ${restaurant[i].desc}
                   </p>
                 </div>
               </div>
               <div class="link-card">
                 <a href="">Leur site</a>
             </div>
           </div>`
    );
};

container.innerHTML = cardsArray;