steal('jquery/controller',
    'jquery/controller/view',
    'lwt/lib/controller.js')
    .then('lwt/lib/jquery.nivo.slider.js')
    .then('lwt/lib/nivo-slider.css')
    .then('//lwt/features/slider/slider_fi.html')
    .then('//lwt/features/slider/slider_se.html')
    .then(function ($) {
        Lwt.Controller('Lwt.Slider', {
            init: function() {
                this.element.html(this.lang('//lwt/features/slider/slider'), {});
                this.element.nivoSlider({directionNav:false, controlNav:false, pauseOnHover:false});
            }
        });
    });
