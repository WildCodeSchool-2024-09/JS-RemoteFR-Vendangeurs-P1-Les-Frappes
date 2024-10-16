document.addEventListener("DOMContentLoaded", function () {
  function setupTextFilters() {
    let textFilters = document.getElementsByClassName("textfilt");
    for (let i = 0; i < textFilters.length; i++) {
      textFilters[i].style.opacity = 0; // Définir l'opacité initiale à 0
    }

    let button = document.getElementById("filtregout");
    button.addEventListener("click", function () {
      for (let i = 0; i < textFilters.length; i++) {
        textFilters[i].style.opacity =
          textFilters[i].style.opacity == 0 ||
          textFilters[i].style.opacity == "0"
            ? 1
            : 0;
      }
      toggleAllDropdowns(0); // Rendre tous les dropdowns opaques
    });
  }

  function dropdown(className, buttonId) {
    let dropdownText = document.getElementsByClassName(className);
    for (let i = 0; i < dropdownText.length; i++) {
      dropdownText[i].style.opacity = 0; // Définir l'opacité initiale à 0
    }

    let button = document.getElementById(buttonId);
    button.addEventListener("click", function () {
      for (let i = 0; i < dropdownText.length; i++) {
        dropdownText[i].style.opacity =
          dropdownText[i].style.opacity == 0 ||
          dropdownText[i].style.opacity == "0"
            ? 1
            : 0;
      }
    });
  }

  function toggleAllDropdowns(opacity) {
    let allDropdowns = ["dropdown1", "dropdown2", "dropdown3", "dropdown4"];
    allDropdowns.forEach(function (className) {
      let elements = document.getElementsByClassName(className);
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.opacity = opacity;
      }
    });
  }

  // Initialiser les filtres de texte
  setupTextFilters();

  // Initialiser les dropdowns
  dropdown("dropdown1", "type");
  dropdown("dropdown2", "specs");
  dropdown("dropdown3", "price");
  dropdown("dropdown4", "dist");
});
