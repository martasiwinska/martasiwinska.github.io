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

function onWindowScroll(e) {
    $("#main-header").toggleClass("animate", (window.pageYOffset > 40)&&(window.innerWidth > 620));
}

$(window).scroll(onWindowScroll);