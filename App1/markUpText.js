(function($) {
    function marked(element, options) {
        if (options.isShow) {
            element.css(options).css({ display: 'inline-block' });
        } else if (!options.isShow) {
            element.css(options).css({ display: 'none' });
        }
        if (options.className != "") {
            return element.addClass(`${options.className}`);
        }
        return element.css(options);
    }

    function validatedOptions(options) {
        if (options.fontSize || options.color) {
            var checkColorCode = (options.color ? options.color.slice(0, -3) : '#');
            var checkFontSize = options.fontSize.slice(-2);
            var checkFontSizePercent = options.fontSize.slice(-1);
            if (checkColorCode != "#") {
                throw new Error("Color value must be start with #");
            }
            const fontSizeSymbol = [
                'px', 'em', '%'
            ];
            if ($.inArray(checkFontSize, fontSizeSymbol) && $.inArray(checkFontSize, fontSizeSymbol) && $.inArray(checkFontSizePercent, fontSizeSymbol)) {
                throw new Error("Font Size value must be with" + fontSizeSymbol.join(','));
            }
        }
    }
    $.fn.markUpText = function(options) {
        const settings = {
            color: '',
            fontSize: '',
            fontFamily: '',
            isShow: true,
            className: '',
        }
        if (options) {
            validatedOptions(options);
            $.extend(settings, options);
        }
        var formartStyle = marked(this, settings);
        this.html(formartStyle.html());
    }
})(jQuery);