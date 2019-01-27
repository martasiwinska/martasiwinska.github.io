(function ($) {
    var previousScrollTop = $(window).scrollTop();

    var onScrollAtTop = function(e) {
        $(settings.nav).css("margin-top", "50px");
    };

    var onScrollDown = function(e) {
        $(settings.nav).css("margin-top", "0px");
        $(settings.nav).removeClass("animated fadeIn");
        $(settings.nav).addClass("animated fadeOut");
    };

    var onScrollUp  = function(e) {
        $(settings.nav).css("margin-top", "0px");
        $(settings.nav).removeClass("animated fadeOut");
        $(settings.nav).addClass("animated fadeIn");
    };

    var onScroll = function(e) {
        var currentScrollTop = $(this).scrollTop();

        if(currentScrollTop === 0) {
            onScrollAtTop(e);
            return;
        }

        if(previousScrollTop > currentScrollTop) {
            onScrollUp(e);
        } else {
            onScrollDown(e);
        }
        previousScrollTop = currentScrollTop;
    };

    var defaults = {
        navSelector: null,
        nav: null
    };

    var validate = function(config) {
        if(config.navSelector === null) {
            throw "navSelector cannot be null";
        }
    };

    var settings = defaults;

    $.fn.magicNav = function(options) {
        settings = $.extend(defaults, options);
        validate(settings);

        settings.nav = $(settings.navSelector);

        $(this).scroll(onScroll);
    };
}(jQuery));