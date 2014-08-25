steal('jquery/controller',
    'jquery/controller/view',
    'lwt/lib/controller.js')
    .then('//lwt/features/social/social_fi.html')
    .then('//lwt/features/social/social_se.html')
    .then(function ($) {
        Lwt.Controller('Lwt.Social', {
            init: function() {
                this.element.html(this.lang('//lwt/features/social/social'), {});
            }
        });
    });
