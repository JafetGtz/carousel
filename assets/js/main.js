ready(function () {

/* ------------------------ se inicializa el carrusel ----------------------- */



  bulmaCarousel.attach('#slider', {
    slidesToScroll: 1,
    slidesToShow: 4,          /* ---------------------- Atributos ------------------------------- */
    autoplay: true,                              
    infinite: true

  });
  bulmaCarousel.attach('#slider1', {
    slidesToScroll: 1,
    slidesToShow: 3,
    infinite: true
  });
  bulmaCarousel.attach('#slider2', {
    slidesToScroll: 1,
    slidesToShow: 3,
    loop: true,
  });
  bulmaCarousel.attach('.hero-carousel', {
    slidesToScroll: 1,
    slidesToShow: 1,
    pagination: false,
    effect: 'fade',
    loop: true
  });
});


///tipos de slider,  cambiar el nombre de la clase  o id para usar.