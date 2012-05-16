steal('jquery/controller',
    'jquery/controller/view',
    'jquery/view/tmpl',
    'lwt/lib/controller.js')
    .then('//lwt/features/header/date_fi.tmpl')
    .then('//lwt/features/header/date_se.tmpl')
    .then(function ($) {
        Lwt.Controller('Lwt.Header', {
            init:function () {
                $('#date').html(this.lang('//lwt/features/header/date'), {});
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
