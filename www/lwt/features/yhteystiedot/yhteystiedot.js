steal('jquery/controller',
    'jquery/controller/view',
    'lwt/lib/controller.js')
    .then('//lwt/features/yhteystiedot/yhteystiedot_fi.tmpl')
    .then('//lwt/features/yhteystiedot/yhteystiedot_se.tmpl')
    .then(function ($) {
        Lwt.Controller('Lwt.Yhteystiedot', {
            init: function() {
                this.element.html(this.lang("//lwt/features/yhteystiedot/yhteystiedot"), {});
            }
        });
    });
