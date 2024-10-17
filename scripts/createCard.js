<<<<<<< HEAD
// export default function createCard({ image, alt, name, noteFrappe, noteGoogle, avis, desc, type }) {
// const card = document.createElement("div");
// card.classList.add("card");
// card.classList.add("splide__slide");
// card.innerHTML = `
//             <div>
//                 <img class="image-container" src="${image}" alt="${alt}" />
//               </div>
//               <div class="desc-container">
//                 <h2 class="name-restaurant">${name}</h2>
//                 <div class="note-responsive">
//                   <div class="note-container">
//                     <p>Note du petit Frappé</p>
//                     <img class="note-image" src="${noteFrappe}" alt=""/>
//                   </div>
//                   <div class="note-container">
//                     <p>Note Google</p>
//                     <p>${noteGoogle}</p>
//                   </div>
//                   <div class="avis">
//                     <p>${avis}</p>
//                   </div>
//                 </div>
//                 <hr />
//                 <div class="text-desc">
//                   <h3>Description</h3>
//                   <p>
//                     ${desc}
//                   </p>
//                 </div>
//               </div>
//               <div class="link-card">
//                 <a href="">Menu</a>
//             </div>
// `;
=======
export default function createCard({image, alt, name, noteFrappe, noteGoogle, avis, desc, type}) {
>>>>>>> 1b296391067fc98d1c1915604459c60733d67576

  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML =`
               <div>
                 <img class="image-container" src="${image}" alt="${alt}" />
               </div>
               <div class="desc-container">
                 <h2 class="name-restaurant">${name}</h2>
                 <div class="note-responsive">
                   <div class="note-container">
                     <p>Note du petit Frappé</p>
                     <img class="note-image" src="${noteFrappe}" alt=""/>
                   </div>
                   <div class="note-container">
                     <p>Note Google</p>
                     <p>${noteGoogle}</p>
                   </div>
                   <div class="avis">
                     <p>${avis}</p>
                   </div>
                 </div>
                 <hr />
                 <div class="text-desc">
                   <h3>Description</h3>
                   <p>
                     ${desc}
                   </p>
                 </div>
               </div>
               <div class="link-card">
                 <a href="">Leur site</a>
             </div>`


    return card;
}