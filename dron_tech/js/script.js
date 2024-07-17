document.addEventListener('click', function (e){
    const targetElement = e.target;
    if (targetElement.closest('.menu-icon')){
        document.documentElement.classList.toggle('menu-open');
    }
})

$(document).ready(function(){
  $('.cards-brands').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,  
    dots: true      
  });
});
$(".accordion__title").on("click", function(e) {

  e.preventDefault();
  var $this = $(this);

  if (!$this.hasClass("accordion-active")) {
      $(".accordion__content").slideUp(400);
      $(".accordion__title").removeClass("accordion-active");
      $('.accordion__arrow').removeClass('accordion__rotate');
  }

  $this.toggleClass("accordion-active");
  $this.next().slideToggle();
  $('.accordion__arrow',this).toggleClass('accordion__rotate');
});
