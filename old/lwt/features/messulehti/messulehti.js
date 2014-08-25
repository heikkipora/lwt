steal('jquery/controller',
    'jquery/controller/view',
    'lwt/lib/controller.js')
    .then('//lwt/features/messulehti/messulehti_fi.html')
    .then('//lwt/features/messulehti/messulehti_se.html')
    .then(function ($) {
        Lwt.Controller('Lwt.Messulehti', {
            init: function() {
                $('#content').html(this.lang("//lwt/features/messulehti/messulehti"), {});
            }
        });
    });
