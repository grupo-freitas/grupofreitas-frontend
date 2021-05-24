$(function(){

    $(".carrousel").slick({
        infinite: true,
        slidesToShow:3,
        slideToScroll: 3,
        prevArrow: $(".negotiate"),
        nextArrow: $(".negotiateback"),
        autoplay: true,
        autoplaySpeed: 2000,
    });

})