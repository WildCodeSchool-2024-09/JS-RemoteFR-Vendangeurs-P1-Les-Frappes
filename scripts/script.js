import createCard from "./createCard.js";
import restaurant from "./restaurant.js";

const cardsContainer = document.querySelector('#cards-container');
const searchInput = document.querySelector('#search-restaurant');
const checkBoxFrance = document.querySelector('#check-france');
const checkBoxAsie = document.querySelector('#check-Asie');
const checkBoxVegan = document.querySelector('#check-vegan');


function displayCards() {

    const searchResto = searchInput.value;

    const filterRestaurant = restaurant.filter(({name}) => {
        const matchSearch = name.includes(searchResto)

        return matchSearch;
    }
)

filterRestaurant.forEach((resto) => {
    cardsContainer.appendChild(createCard(resto));
})
}

searchInput.addEventListener("input", displayCards);

displayCards()