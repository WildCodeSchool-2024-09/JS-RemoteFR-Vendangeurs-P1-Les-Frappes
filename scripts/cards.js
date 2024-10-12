import restaurant from "./restautant";

// let card = document.querySelector("#card");

// card = `
//     <img class="restaurantImg" src="${restaurant[0].img}" alt="Restaurant">
//     <h2>${restaurant[0].name}</h2>
//     <h3>"Note"</h3>
//     <img src="${restaurant[0].note}" alt="note_etoiles"> 
//     <p>${restaurant[0].notice}</p>
//     <hr>
//     <p>${restaurant[0].desc}</p>
// `

// // J'ai oublié comment c'est le reste

// for (i = 0; i < restaurant.lenght; i++ ) { 

// }

// card.outerHTML = card; 


const buttons = document.querySelectorAll(".btn"); 
const slides = document.querySelectorAll(".card");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const calcNextSlide = e.target.id === "next" ? 1 : -1;
      const slideActive = document.querySelector(".active");
  
      newIndex = calcNextSlide + [...slides].indexOf(slideActive);
  
      if (newIndex < 0) newIndex = [...slides].length - 1;
      if (newIndex >= [...slides].length) newIndex = 0;
      slides[newIndex].classList.add("active");
        
      console.log("calcNextSlide");
      slideActive.classList.remove("active");
    });
  });
