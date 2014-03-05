steal('jquery/controller',
    'jquery/controller/view',
    'lwt/lib/controller.js')
    .then('//lwt/features/yhteystiedot/yhteystiedot_fi.html')
    .then('//lwt/features/yhteystiedot/yhteystiedot_se.html')
    .then(function ($) {
        Lwt.Controller('Lwt.Yhteystiedot', {
            init: function() {
                this.element.html(this.lang("//lwt/features/yhteystiedot/yhteystiedot"), {});
            }
        });
    });
