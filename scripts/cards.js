
document.addEventListener( 'DOMContentLoaded', function() {
  let splide = new Splide( '.splide', {
type   : 'loop',
perPage: 3,
focus  : 'center',
gap: '4rem',
snap: true,
breakpoints: {
  768: {
    perPage: 1
  },
  993: {
    perPage: 3
  },
}
} );
  splide.mount();
} );