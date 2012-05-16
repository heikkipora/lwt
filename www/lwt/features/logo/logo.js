steal('jquery/controller',
    'jquery/controller/view',
    'lwt/lib/controller.js')
    .then(function ($) {
        Lwt.Controller('Lwt.Logo', {
            load:function () {
                $('#logo').removeClass('fi se').addClass(this.getLang());
            }
        });
    });
