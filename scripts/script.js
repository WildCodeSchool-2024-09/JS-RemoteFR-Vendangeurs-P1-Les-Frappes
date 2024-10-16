document.addEventListener("DOMContentLoaded", function() {
    function setupTextFilters() {
        let textFilters = document.getElementsByClassName("textfilt");
        for (let i = 0; i < textFilters.length; i++) {
            textFilters[i].style.opacity = 0; // Définir l'opacité initiale à 0
        }

        let button = document.getElementById("filtregout");
        button.addEventListener("click", function() {
            for (let i = 0; i < textFilters.length; i++) {
                textFilters[i].style.opacity = (textFilters[i].style.opacity == 0 || textFilters[i].style.opacity == "0") ? 1 : 0;
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
        button.addEventListener("click", function() {
            for (let i = 0; i < dropdownText.length; i++) {
                dropdownText[i].style.opacity = (dropdownText[i].style.opacity == 0 || dropdownText[i].style.opacity == "0") ? 1 : 0;
            }
        });
    }

    function toggleAllDropdowns(opacity) {
        let allDropdowns = ["dropdown1", "dropdown2", "dropdown3", "dropdown4"];
        allDropdowns.forEach(function(className) {
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


// Ajouter un écouteur de survol pour changer le curseur


const map = document.querySelector(".southParkMap")

map.addEventListener("mouseover", function() {
    if (map.style.transform === "perspective(800px) translateZ(100px)") {
        map.style.cursor = "zoom-out";
    } else {
        map.style.cursor = "zoom-in";
    }
});

const mapCursor = map.style.cursor ;
const point1 = document.querySelector("#point1");
const point2 = document.querySelector("#point2");
const point3 = document.querySelector("#point3");
const point4 = document.querySelector("#point4");
const point5 = document.querySelector("#point5");

/*
const points = [point1, point2, point3, point4];

const zoomPerspective = function zoom(a, b, c, d) {
    if (a = 1 && a < (points.length)+1, a++)
       { point(a).style.top = b+"%";
        point(a).style.left = c+"%";
        point(a).style.scale = d+"%";
        a++;
}}*/



// Ajouter un écouteur de clic pour gérer le zoom MAP et pointeurs 
map.addEventListener("click", function() {
    if (map.style.transform === "perspective(800px) translateZ(100px)") {
        // Zoom avant
        map.style.transform = "perspective(200px) translateZ(100px)";
        map.style.transition = "transform 0.5s";
        map.style.cursor = "zoom-out";
        point1.style.top = "28%";
        point1.style.left = "14%";
        
        //point1.style.scale = "2";
        point2.style.top = "65%";
        point2.style.left = "97%";
       // point2.style.scale = "1,8";
        point3.style.top = "28%";
        point3.style.left = "95%";
       // point3.style.scale = "1,8";
        point4.style.top = "28%";
        point4.style.left = "-10%";
       // point4.style.scale = "1,8";
       point5.style.top = "68%";
       point5.style.left = "45%";
      // point4.style.scale = "1,8";
        
    } else {
        // Zoom arrière
        map.style.transform = "perspective(800px) translateZ(100px)";
        map.style.transition = "transform 0.5s";
        map.style.cursor = "zoom-in";
        point1.style.top = "38%";
        point1.style.left = "28%";
        point2.style.top = "60%";
        point2.style.left = "78%";
        point3.style.top = "38%";
        point3.style.left = "75%";
        point4.style.top = "37%";
        point4.style.left = "15%";
        point5.style.top = "60%";
        point5.style.left = "45%";
        point1.style.scale = "none";
        point2.style.scale = "none";
        point3.style.scale = "none";
        point4.style.scale = "none";
        point5.style.scale = "none";
    }
    // Basculer l'état du zoom
mapCursor !== mapCursor
});
<<<<<<< HEAD
=======

>>>>>>> 8b66bfd7c5b3181d6159748eb0e32e87abca31be
