import restaurant from "./restaurant.js";

const slideContainer = document.querySelector('#slide');

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentIndex = 0;

  // Ajouter les images au slider
  // restaurant.forEach(restaurants => {
  //     const img = document.createElement('img');
  //     img.src = restaurant.src;
  //     img.alt = restaurant.alt;
  //     img.classList.add('slide');
  //     slider.appendChild(img);
  // });

  // Fonction pour mettre à jour le slider
  function updateSlider() {
      const translateX = -currentIndex * 100;
      slider.style.transform = `translateX(${translateX}%)`;
  }

  // Événements pour les boutons
  prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : restaurant.length - 1;
      updateSlider();
  
  });

  nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex < restaurant.length - 1) ? currentIndex + 1 : 0;
      updateSlider();
  });

  // Initialiser le slider
  updateSlider();
});

updateSlider()