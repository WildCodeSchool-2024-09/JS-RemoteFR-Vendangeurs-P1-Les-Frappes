
/*document.addEventListener("DOMContentLoaded", function() {
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
});*/


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
const initialStyle = {
    point1: {
        top: point1.style.top,
        left: point1.style.left,
        transform: point1.style.transform,
    },
    point2: {
        top: point2.style.top,
        left: point2.style.left,
        transform: point2.style.transform,
    },
    point3: {
        top: point3.style.top,
        left: point3.style.left,
        transform: point3.style.transform,
    },
    point4: {
        top: point4.style.top,
        left: point4.style.left,
        transform: point4.style.transform,
    },
    point5: {
        top: point5.style.top,
        left: point5.style.left,
        transform: point5.style.transform,
    }
};

/*
map.addEventListener("click", function() {
    if (map.style.transform === "perspective(800px) translateZ(100px)") {
        // Zoom avant
        map.style.transform = "perspective(200px) translateZ(100px)";
        map.style.transition = "transform 0.5s";
        map.style.cursor = "zoom-out";
        point1.style.top = "34%";
        point1.style.left = "14%";
        point1.style.transition = "500ms";
        //point1.style.scale = "2";
        point2.style.top = "65%";
        point2.style.left = "97%";
        point2.style.transition = "500ms";
       // point2.style.scale = "1,8";
        point3.style.top = "28%";
        point3.style.left = "95%";
        point3.style.transition = "500ms";
       // point3.style.scale = "1,8";
        point4.style.top = "28%";
        point4.style.left = "-10%";
        point4.style.transition = "500ms";
       // point4.style.scale = "1,8";
       point5.style.top = "68%";
       point5.style.left = "45%";
       point5.style.transition = "500ms";
      // point5.style.scale = "1,8";
        
    } else {
        // Zoom arrière
        map.style.transform = "perspective(800px) translateZ(100px)";
        map.style.transition = "transform 0.5s";
        map.style.cursor = "zoom-in";
        point1.style.top = initialStyle.point1.top;
        point1.style.left = initialStyle.point1.left;
        point2.style.top = initialStyle.point1.top;
        point2.style.left = initialStyle.point1.left;
        point3.style.top = initialStyle.point1.top;
        point3.style.left = initialStyle.point1.left;
        point4.style.top = initialStyle.point1.top;
        point4.style.left = initialStyle.point1.left;
        point5.style.top = initialStyle.point1.top;
        point5.style.left = initialStyle.point1.left;
        //point1.style.scale = "none";
        //point2.style.scale = "none";
        //point3.style.scale = "none";
        //point4.style.scale = "none";
        //point5.style.scale = "none";
    }
    // Basculer l'état du zoom
mapCursor !== mapCursor
});
*/
// RECUPERE LA POSITION DE LA SOURIS
/*
mapCursor.addEventListener('mouseover', function(event) {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`Position de la souris: X=${x}, Y=${y}`);
});
*/

if (window.matchMedia("(max-width: 768px)").matches) {
    console.log("petit ecran");
map.addEventListener("click", function() {
    if (map.style.transform === "perspective(800px) translateZ(100px)") {
        // Zoom avant
        map.style.transform = "perspective(200px) translateZ(100px)";
        map.style.transition = "transform 0.5s";
        map.style.cursor = "zoom-out";
        point1.style.top = "34%";
        point1.style.left = "14%";
        point1.style.transition = "500ms";
      
        point2.style.top = "65%";
        point2.style.left = "97%";
        point2.style.transition = "500ms";
       
        point3.style.top = "28%";
        point3.style.left = "95%";
        point3.style.transition = "500ms";

        point4.style.top = "28%";
        point4.style.left = "-10%";
        point4.style.transition = "500ms";
      
       point5.style.top = "68%";
       point5.style.left = "45%";
       point5.style.transition = "500ms";
      
        
    } else {
        // Zoom arrière
        map.style.transform = "perspective(800px) translateZ(100px)";
        map.style.transition = "transform 0.5s";
        map.style.cursor = "zoom-in";
        point1.style.top = initialStyle.point1.top;
        point1.style.left = initialStyle.point1.left;
        point2.style.top = initialStyle.point1.top;
        point2.style.left = initialStyle.point1.left;
        point3.style.top = initialStyle.point1.top;
        point3.style.left = initialStyle.point1.left;
        point4.style.top = initialStyle.point1.top;
        point4.style.left = initialStyle.point1.left;
        point5.style.top = initialStyle.point1.top;
        point5.style.left = initialStyle.point1.left;
       
    }

    // Basculer l'état du zoom
mapCursor !== mapCursor
});
} else if (window.matchMedia("(min-width: 768px) and (max-width:996px)").matches ) {
    map.addEventListener("click", function() {
        if (map.style.transform === "perspective(800px) translateZ(100px)") {
            // Zoom avant
            map.style.transform = "perspective(200px) translateZ(100px)";
            map.style.transition = "transform 0.5s";
            map.style.cursor = "zoom-out";
            point1.style.top = "39%";
            point1.style.left = "34%";
            point1.style.transition = "500ms";
            //point1.style.scale = "2";
            point2.style.top = "60%";
            point2.style.left = "72%";
            point2.style.transition = "500ms";
           // point2.style.scale = "1,8";
            point3.style.top = "39%";
            point3.style.left = "70%";
            point3.style.transition = "500ms";
           // point3.style.scale = "1,8";
            point4.style.top = "39%";
            point4.style.left = "22%";
            point4.style.transition = "500ms";
           // point4.style.scale = "1,8";
           point5.style.top = "60%";
           point5.style.left = "48%";
           point5.style.transition = "500ms";
          // point5.style.scale = "1,8";
            
        } else {
            // Zoom arrière
            map.style.transform = "perspective(800px) translateZ(100px)";
            map.style.transition = "transform 0.5s";
            map.style.cursor = "zoom-in";
            point1.style.top = initialStyle.point1.top;
            point1.style.left = initialStyle.point1.left;
            point2.style.top = initialStyle.point1.top;
            point2.style.left = initialStyle.point1.left;
            point3.style.top = initialStyle.point1.top;
            point3.style.left = initialStyle.point1.left;
            point4.style.top = initialStyle.point1.top;
            point4.style.left = initialStyle.point1.left;
            point5.style.top = initialStyle.point1.top;
            point5.style.left = initialStyle.point1.left;
         
        }
    
        // Basculer l'état du zoom
    mapCursor !== mapCursor
    });
} else {
    map.addEventListener("click", function() {
        if (map.style.transform === "perspective(800px) translateZ(100px)") {
            // Zoom avant
            map.style.transform = "perspective(200px) translateZ(100px)";
            map.style.transition = "transform 0.5s";
            map.style.cursor = "zoom-out";
            point1.style.top = "35%";
            point1.style.left = "40%";
            point1.style.transition = "500ms";
            //point1.style.scale = "2";
            point2.style.top = "68%";
            point2.style.left = "66%";
            point2.style.transition = "500ms";
           // point2.style.scale = "1,8";
            point3.style.top = "35%";
            point3.style.left = "65%";
            point3.style.transition = "500ms";
           // point3.style.scale = "1,8";
            point4.style.top = "35%";
            point4.style.left = "31%";
            point4.style.transition = "500ms";
           // point4.style.scale = "1,8";
           point5.style.top = "69%";
           point5.style.left = "49%";
           point5.style.transition = "500ms";
          // point5.style.scale = "1,8";
            
        } else {
            // Zoom arrière
            map.style.transform = "perspective(800px) translateZ(100px)";
            map.style.transition = "transform 0.5s";
            map.style.cursor = "zoom-in";
            point1.style.top = initialStyle.point1.top;
            point1.style.left = initialStyle.point1.left;
            point2.style.top = initialStyle.point1.top;
            point2.style.left = initialStyle.point1.left;
            point3.style.top = initialStyle.point1.top;
            point3.style.left = initialStyle.point1.left;
            point4.style.top = initialStyle.point1.top;
            point4.style.left = initialStyle.point1.left;
            point5.style.top = initialStyle.point1.top;
            point5.style.left = initialStyle.point1.left;
            
        }
    
        // Basculer l'état du zoom
    mapCursor !== mapCursor
    });
}
  
