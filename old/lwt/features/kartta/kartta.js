steal('jquery/controller',
    'jquery/controller/view',
    'lwt/lib/controller.js')
    .then('//lwt/features/kartta/kartta_fi.html')
    .then('//lwt/features/kartta/kartta_se.html')
    .then(function ($) {
        Lwt.Controller('Lwt.Kartta', {
            init: function() {
                $('#content').html(this.lang("//lwt/features/kartta/kartta"), {});
            }
        });
    });
