
document.addEventListener( 'DOMContentLoaded', function() {
  let splide = new Splide( '.splide', {
type   : 'loop',
perPage: 5,
focus  : 'center',
gap: '5%',
trimSpace: false,
snap: true,
breakpoints: {
  780: {
    perPage: 1
  },
  990: {
    perPage: 3
  },
} 
} );
  splide.mount(); })

  

