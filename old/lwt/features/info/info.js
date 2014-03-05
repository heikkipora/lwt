steal('jquery/controller',
    'jquery/controller/view',
    'lwt/lib/controller.js')
    .then('//lwt/features/info/info_fi.html')
    .then('//lwt/features/info/info_se.html')
    .then(function ($) {
        Lwt.Controller('Lwt.Info', {
            init: function() {
                $('#content').html(this.lang("//lwt/features/info/info"), {});
            },
            '.info-links span click':function (element) {
                var h1num = element.attr("id");
                $.scrollTo("h1:eq(" + h1num + ")", 400, {axis:'y', offset:{top:-8}});
                var linkText = element.text();
                this.track('Info', linkText);
            }
        });
    });
