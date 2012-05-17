steal('jquery/controller',
    'jquery/controller/view',
    'lwt/lib/controller.js')
    .then('//lwt/features/messulehti/messulehti_fi.tmpl')
    .then('//lwt/features/messulehti/messulehti_se.tmpl')
    .then(function ($) {
        Lwt.Controller('Lwt.Messulehti', {
            init: function() {
                $('#content').html(this.lang("//lwt/features/messulehti/messulehti"), {});
            }
        });
    });
