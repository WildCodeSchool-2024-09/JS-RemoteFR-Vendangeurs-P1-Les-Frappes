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

new Splide( '.splide', {
  arrowPath: 'm15.5 0.932-4.3 4.38...',
  classes: {
		arrows: 'splide__arrows your-class-arrows',
		arrow : 'splide__arrow your-class-arrow',
		prev  : 'splide__arrow--prev class-prev',
		next  : 'splide__arrow--next class-next',
  },
} ).mount();