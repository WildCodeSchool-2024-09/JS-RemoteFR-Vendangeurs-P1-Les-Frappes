import createCard from "./createCard.js";
import restaurant from "./restaurant.js";

document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.querySelector(".slider");
  const searchInput = document.querySelector("#search-restaurant");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let currentIndex = 0;

  function displayCards() {
    const searchResto = searchInput.value;

    const filterRestaurant = restaurant.filter(({name}) => {
      const matchSearch = name.toLowerCase().includes(searchResto.toLowerCase());

      return matchSearch ;
    });

    filterRestaurant.forEach((resto) => {
      cardsContainer.appendChild(createCard(resto));
    });
  }

  function updateCard() {
    const translateX = -currentIndex * 20;
    cardsContainer.style.transform = `translateX(${translateX}%)`;
  }

  prevButton.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : restaurant.length -1;
    updateCard();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = currentIndex < restaurant.length - 1 ? currentIndex + 1 : 0;
    updateCard();
  });

searchInput.addEventListener("input", displayCards);

displayCards();
});