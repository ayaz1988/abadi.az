
//Date
$('[data-toggle="datepicker"]').datepicker({
    autoHide: true,
    format: 'dd.mm.yyyy',
    // minDate: '-1m'
});



$('.input_one').change(function () {

    if ($(this).val() == "") {

        $(this).parent().children(".inpt_date_name").css("display", "none");

        $(this).css("background-position-y", "3px");

    } else {
        
        $(this).parent().children(".inpt_date_name").css("display", "block");

        $(this).css("background-position-y", "-3px");
    }
});

$('.slider_one .owl-carousel').owlCarousel({
    items: 4,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    smartSpeed: 2400,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('.slider_two .owl-carousel').owlCarousel({
    items: 4,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:2600,
    autoplayHoverPause:true,
    smartSpeed: 2200,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('.section_memory .owl-carousel').owlCarousel({
    items: 5,
    loop:false,
    margin:0,
    autoplay:false,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    smartSpeed: 1500,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
})



 $(document).ready(function () {
     $(".icon_responsive").click(function (){
         $(".mobile_menu").slideToggle();
         $('body').toggleClass('mbl_toggled_hdn');
         $('div.icon_responsive').toggleClass('icon_responsive_cls');
     })

 });


// Project gallery
$('.project-slider').lightGallery({
    selector: '.project-slider-item a',
    download: false
})