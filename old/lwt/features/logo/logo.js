steal('jquery/controller',
    'jquery/controller/view',
    'lwt/lib/controller.js')
    .then(function ($) {
        Lwt.Controller('Lwt.Logo', {
            init:function () {
                $('#logo').removeClass('fi se').addClass(this.getLang());
            }
        });
    });
