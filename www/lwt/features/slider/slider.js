steal('jquery/controller',
    'jquery/controller/view',
    'lwt/lib/controller.js')
    .then('lwt/lib/jquery.nivo.slider.js')
    .then('lwt/lib/nivo-slider.css')
    .then('//lwt/features/slider/slider_fi.tmpl')
    .then('//lwt/features/slider/slider_se.tmpl')
    .then(function ($) {
        Lwt.Controller('Lwt.Slider', {
            init: function() {
                this.element.html(this.lang('//lwt/features/slider/slider'), {});
                this.element.nivoSlider({directionNav:false, controlNav:false, pauseOnHover:false});
            }
        });
    });
