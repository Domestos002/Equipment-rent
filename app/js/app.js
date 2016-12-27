;(function () {
    function num() {
        var i = 1;
        $(".b-advantages-markered-list").find(".b-advantages-markered-list__number").each(function () {
            $(this).append(i);
            i++;
        });
    }
    $(document).ready(function () {
        $(".slider-range").each(function () {
            var slider = $(this);
            slider.slider();
            /*slider.on("slide", function (slideEvt) {
             slider.closest('.slider-block').find('[data-input-value]').val(slideEvt.value);
             });
             setTimeout(function () {
             slider.closest('.slider-block').find('[data-input-value]').val(slider.data('slider').value[0]);
             }, 500);*/
        });

        if ($("select, input:radio").length > 0) {
            $("select, input:radio").styler();
        }

        $(".b-products-item").click(function () {
            $(this).find("#prod-item-link").trigger("click");
        });
    });

    $(function () {
        num();
        $('a.js-scrollScreen[href*="#"]:not([href="#"])').click(function () {
            if ($(this).hasClass('sliding-panel-link')) {
                $('body').removeClass('ovh');
                $('.sliding-panel').removeClass('active');
                $('.site-wrapper-content').removeClass('active');
                $(".site-wrapper").css("width", "auto");
                $(".site-wrapper").toggleClass("ovh");

            }
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[id=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
})();

