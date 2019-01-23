$(document).magicArrow({
    primarySelector:    '#scroll-top',
    secondarySelector:  '#scroll-down',
    animationDuration:  500,
    animationType:      'swing',
    animatePrimary:     true,
    animateSecondary:   true
});

$(document).ready(function() {

// SCROLL-ICON

    //     const ScrollBtn = $("scroll-button");
    //     const ScrollBtnOffset = ScrollBtn.offset();
    //     const ScrollBtnPosition = ScrollBtnOffset.top;
    //     const downIconActivity = ScrollBtnPosition + window.innerHeight;
    //     const topIconActivity = ScrollBtnPosition - window.innerHeight;

    // $("#scroll-down").click(function(){
    //         $("html, body").animate({ scrollTop: downIconActivity}, 600);
    //         console.log(ScrollBtnPosition);
    // });

    // $("#scroll-top").click(function(){
    //     console.log("działa");
    //     $("html, body").animate({ scrollTop: topIconActivity}, 600);
    // });


// HEADER

$(window).scroll(function() {

        if((pageYOffset > 40)&&(window.innerWidth > 620)) {
            $("#main-header").css("clip-path", "polygon(0 0, 100% 0, 100% 100%, 0 100%")
            $("#main-header").css("transistion", "ease-in-out 8s");    
        }
         
      });
    
});
