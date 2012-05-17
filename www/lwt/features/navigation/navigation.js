steal('jquery/controller',
    'jquery/controller/view',
    'jquery/event/hashchange',
    'lwt/lib/controller.js')
    .then('lwt/lib/jquery.scrollTo.js')
    .then('lwt/features/ajankohtaista')
    .then('lwt/features/info')
    .then('lwt/features/kartta')
    .then('lwt/features/messulehti')
    .then('lwt/features/slider')
    .then('lwt/features/social')
    .then('lwt/features/wanhattalot')
    .then('lwt/features/yhteystiedot')
    .then(function ($) {
        Lwt.Controller('Lwt.Navigation', {
            init:function () {
                $('#tabs').removeClass('fi se').addClass(this.getLang());
                $('#navigation-indicator').removeClass('fi se').addClass(this.getLang());
                $('#slider').lwt_slider();
                $('#footer').lwt_yhteystiedot();
                $('#ext-links').lwt_social();
                this.showPage(this.getPageIdFromHash());
                $('body').removeClass('building');
            },
            '{window} hashchange':function () {
                this.showPage(this.getPageIdFromHash());
                this.scrollToTabs();
            },
            showPage:function (pageName) {
                if ($('#content').controller()) {
                    $('#content').controller().destroy();
                }
                if (pageName == 'ajankohtaista') {
                    $('#content').lwt_ajankohtaista();
                } else if (pageName == 'info') {
                    $('#content').lwt_info();
                } else if (pageName == 'kartta') {
                    $('#content').lwt_kartta();
                } else if (pageName == 'messulehti') {
                    $('#content').lwt_messulehti();
                } else if (pageName == 'wanhattalot') {
                    $('#content').lwt_wanhattalot();
                }
                this.updateIndicator(pageName);
                this.track('Sivut', this.lang(pageName));
            },
            scrollToTabs:function () {
                $.scrollTo('#tabs', 400, {axis:'y', offset:{top:-8}});
            },
            getPageIdFromHash:function () {
                if (location.hash == "") {
                    return "ajankohtaista";
                } else {
                    return location.hash.substring(2);  // skip #!
                }
            },
            updateIndicator:function (pageId) {
                var pageIdToSpritePos = { "ajankohtaista":"0 0px", "wanhattalot":"0 -25px", "kartta":"0 -50px", "info":"0 -75px", "messulehti":"0 -100px" }
                $('#navigation-indicator').css("background-position", pageIdToSpritePos[pageId]);
            }
        });
    });
