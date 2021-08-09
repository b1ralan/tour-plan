$(document).ready(function () {
  const hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    }
  });

  const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    }
  });

  const menuButton = $('.menu-button');
  menuButton.on('click', function(){
    $('.navbar-bottom').toggleClass('navbar-bottom__visible')
  })

  const modalButton = $('[data-toggle=modal]')
  const closeModalButton = $(".modal__close")
 
  modalButton.on('click', openModal)
  closeModalButton.on('click', closeModal)

  function openModal(){
    const modalOverlay = $(".modal__overlay");
    const modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible")
    modalDialog.addClass("modal__dialog--visible")
  }
  function closeModal(event){
    event.preventDefault();
    const modalOverlay = $(".modal__overlay");
    const modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible")
    modalDialog.removeClass("modal__dialog--visible")
  }
});
