(function ($) {
    "use strict";

    // $(window).on('load', function(){
    //     $("#preloader").delay(400).fadeOut();

    $('.hamburger-icon').on('click', function () {
        $('.header-menu').toggleClass('current');
    }); 
    $('.menu-cross').on('click', function () {
        $('.header-menu').toggleClass('current');
    });  

    // });
    $('.category-slider').owlCarousel({
        loop:true,
        margin:32,
        responsive:{
            0:{
                items:2,
                stagePadding: 50,
                margin:20,
            },
            767:{
                items:3
            },
            992:{
                items:5
            }
        }
    });
    $('.article-slider').owlCarousel({
        loop:true,
        margin:32,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    $('.best-product-slider').owlCarousel({
        loop:true,
        margin:32,
        responsive:{
            0:{
                items:2
            },
            767:{
                items:3
            }
        }
    });
    $('.work-slider').owlCarousel({
        loop:true,
        margin:32,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            767:{
                items:3
            },
        }
    });
    $('.review-slider').owlCarousel({
        loop:true,
        margin:32,
        nav:true,
        dots:false,
        stagePadding: 30,
        responsive:{
            0:{
                items:1,
                margin:20,
            },
            767:{
                items:2
            },
            992:{
                items:2
            }
        }
    });

  

})(jQuery);

