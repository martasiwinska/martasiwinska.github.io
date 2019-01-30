$(document).magicArrow({
    primarySelector:    '#scroll-top',
    secondarySelector:  '#scroll-down',
    animationDuration:  500,
    animationType:      'swing',
    animatePrimary:     true,
    animateSecondary:   true
});

$('#magicSearch').magicSearch({
    primaryMenuSelector:        '#right-itemlist',
    hideableElementsSelector:   '.hide-when-search'
});

$(window).magicNav({
    navSelector: '#nav2'
});

$(document).magicLine({
    elementSelector:    '#main-header',
});

$(window).scroll(function(){
    if ($(this).scrollTop() + document.documentElement.clientHeight > 1000) {
        $('#section-container-img-1').css("transform","rotate(25deg)");
        $('#section-container-img-1').css("transition-duration","3s");
    }
    else  {
        $('#section-container-img-1').css("transform","rotate(15deg)");
        $('#section-container-img-1').css("transition-duration","3s");
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop() + document.documentElement.clientHeight > 1300) {
        $('#section-container-img-2').css("transform","rotate(-25deg)");
        $('#section-container-img-2').css("transition-duration","3s");
    }
    else  {
        $('#section-container-img-2').css("transform","rotate(-15deg)");
        $('#section-container-img-2').css("transition-duration","3s");
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop() + + document.documentElement.clientHeight > 1600) {
        $('#section-container-img-3').css("transform","rotate(25deg)");
        $('#section-container-img-3').css("transition-duration","3s");
    }
    else  {
        $('#section-container-img-3').css("transform","rotate(15deg)");
        $('#section-container-img-3').css("transition-duration","3s");
    }
});






