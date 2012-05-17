steal('jquery/controller',
    'jquery/controller/view',
    'lwt/lib/controller.js')
    .then('//lwt/features/header/header_fi.html')
    .then('//lwt/features/header/header_se.html')
    .then(function ($) {
        Lwt.Controller('Lwt.Header', {
            init:function () {
                this.element.html(this.lang('//lwt/features/header/header'), {});
            },
            '#language span click':function (element) {
                this.setLang(element.attr("id"));
            },
            setLang:function (lang) {
                if (lang != this.getLang()) {
                    $.cookie('lwt_language', lang, { expires:60 });
                    window.location.reload();
                }
            }
        });
    });
