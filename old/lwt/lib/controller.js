steal('jquery/controller',
    'jquery/dom/cookie')
    .then(function ($) {
        $.Controller('Lwt.Controller', {
            lang:function (fileName) {
                return fileName + "_" + this.getLang();
            },
            getLang:function () {
                var lang = $.cookie('lwt_language');
                if (lang == undefined) {
                    lang = "fi";
                }
                return lang;
            },
            track:function (category, action, label) {
                _gaq.push(['_trackEvent', category, action, label]);
            }
        });
    });
