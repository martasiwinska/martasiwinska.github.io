(function ($) {
    var animationLocked = false;

    var lockAnimationChange = function() {
        animationLocked = true;
    };
    var unlockAnimationChange = function() {
        animationLocked = false;
    };

    var defaults = {
        $element:           null,
        rotate:             25,
        scrollDirection:    null
    };

    var validate = function(config) {
        if(config.scrollDirection === null) {
            throw "scrollDirection cannot be null, set either 'left' or 'right'";
        } else {
            if(config.scrollDirection !== 'left' && config.scrollDirection !== 'right') {
                throw "scrollDirection must be either 'left' or 'right'";
            }
        }
    };

    var onScroll = function(e) {
        if(animationLocked === false) {
            lockAnimationChange();

            var rotationMultiplier = (settings.scrollDirection === 'left' ? -1 : 1);
            var currentRadians = rotationMultiplier * settings.$element.css('transform').replace(/[^0-9]/g, '');
            var radians = settings.rotate * rotationMultiplier;
            var totalRadians = Math.round(currentRadians + radians);

            settings.$element.css({transform: 'rotate(' + totalRadians + 'rad)'});

            setTimeout(unlockAnimationChange, 5000);
        }
    };

    var settings = defaults;

    $.fn.magicRotator = function(options) {
        settings = $.extend(defaults, options);
        validate(settings);

        settings.$element    = $(this);

        settings.$element.css('transition-duration', '5s');
        settings.$element.css('animation-duration', '5s');

        $(window).scroll(onScroll);
    };
}(jQuery));