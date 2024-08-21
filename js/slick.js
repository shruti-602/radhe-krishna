$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 3,
    arrows: true,
    Infinity: true,
    fade: true,
    asNavFor: '.slider-nav',
    autoplaySpeed: 2000,
    autoplay: true,
});

$('.slider-nav').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    asNavFor: '.slider-for',
    centerMode: true,
    Infinity: true,
    focusOnSelect: true,
    dots: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '50px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '50px',
                slidesToShow: 3
            }
        }
    ]
});




// $('.center').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 3,
//     responsive: [
//         {
//             breakpoint: 768,
//             settings: {
//                 arrows: true,
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 3
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 arrows: true,
//                 centerMode: true,
//                 centerPadding: '85px',
//                 slidesToShow: 1,
//                 focusOnSelect: true,
//                 infinite: true
//             }
//         }
//     ]
// });