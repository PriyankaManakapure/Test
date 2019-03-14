//Bn=anner slider

$('.banner-slider .owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    mouseDrag: false,
    touchDrag: false,

    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: false,
    center: true,
    smartSpeed: 2000

});

//Banner slider

$('#owl-carousel').owlCarousel({
    // rtl: true,
    autoplay: true,
    autoplayTimeout: 2000,
    loop: true,
    margin: 0,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        768: {
            items: 5
        },
        1000: {
            items: 6
        },
        1534: {
            items: 8
        }
    }
});


$(document).ready(function () {

    $("#owl-demo").owlCarousel({

        autoplay: false,
        //autoplayTimeout: 2000,
        loop: false,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 2
            },
            1534: {
                items: 2
            }
        }


    });

});



//Banner slider

jQuery("#myNavbar li a").on('click', function (event) {
    if ($(document).width() < 767) {
        $('.navbar-toggle').trigger('click');
    }
    animateHTML(event, this);
});

$('body').on('activate.bs.scrollspy', function (e, ele) {
    var hash = $(e.target).find('a').attr('href')
})

if ($(document).width() < 767) {
    $(".banner_img_box img").height($(window).innerHeight() - 44)
}

function animateHTML(event, ele, offset) {
    var BodyOffset = 80;
    if (offset == true) {
        BodyOffset = $('body').data('offset');
        if ($(document).width() < 767) {
            BodyOffset = $('body').data('mobile-offset');
        }
    }
    var url = $(ele).attr('href');
    var nurl = url.indexOf("#");
    event.preventDefault();
    var hash = ele.hash;
    var height = jQuery(hash).offset().top;
    jQuery('html, body').stop(true, false).animate({
        scrollTop: height - BodyOffset
    }, 800, function () {
    });
    window.location.hash = hash;
}


$(window).scroll(function () {
    if ($(this).scrollTop() > 2) {
        $('.navbar-inverse').addClass("sticky");
    }
    else {
        $('.navbar-inverse').removeClass("sticky");
    }
});


$(window).scroll(function () {
    if ($(window).scrollTop() >= 500) {
        $("#top-back").fadeIn(300);
    } else {
        $("#top-back").fadeOut(300);
    }
});
$("#top-back, #brand-logo").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 300);
    return false;
});


