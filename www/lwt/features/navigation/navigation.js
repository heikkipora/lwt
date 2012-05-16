steal('jquery/controller',
    'jquery/controller/view',
    'jquery/view/tmpl',
    'lwt/lib/controller.js')
    .then('//lwt/features/navigation/ajankohtaista_fi.tmpl')
    .then('//lwt/features/navigation/ajankohtaista_se.tmpl')
    .then('//lwt/features/navigation/info_fi.tmpl')
    .then('//lwt/features/navigation/info_se.tmpl')
    .then('//lwt/features/navigation/kartta_fi.tmpl')
    .then('//lwt/features/navigation/kartta_se.tmpl')
    .then('//lwt/features/navigation/messulehti_fi.tmpl')
    .then('//lwt/features/navigation/messulehti_se.tmpl')
    .then('//lwt/features/navigation/wanhattalot_fi.tmpl')
    .then('//lwt/features/navigation/wanhattalot_se.tmpl')
    .then('//lwt/features/navigation/ext-links_fi.tmpl')
    .then('//lwt/features/navigation/ext-links_se.tmpl')
    .then('//lwt/features/navigation/slider_fi.tmpl')
    .then('//lwt/features/navigation/slider_se.tmpl')
    .then('//lwt/features/navigation/yhteystiedot_fi.tmpl')
    .then('//lwt/features/navigation/yhteystiedot_se.tmpl')
    .then(function ($) {
        Lwt.Controller('Lwt.Navigation', {
            pageIdToSpritePos:{ "ajankohtaista":"0 0px", "wanhattalot":"0 -25px", "kartta":"0 -50px", "info":"0 -75px", "messulehti":"0 -100px" },
            load:function () {
                $('#slider').html(this.lang('//lwt/features/navigation/slider'), {});
                $('#slider').nivoSlider({directionNav:false, controlNav:false, pauseOnHover:false});
                $(window).hashchange(this.callback('hashChangeEvent'));
                $('#tabs').removeClass('fi se').addClass(this.getLang());
                $('#navigation-indicator').removeClass('fi se').addClass(this.getLang());
                this.showPage(this.getPageIdFromHash());
                $('#footer').html(this.lang('//lwt/features/navigation/yhteystiedot'), {});
                $('#ext-links').html(this.lang('//lwt/features/navigation/ext-links'), {});
            },
            hashChangeEvent:function () {
                this.showPage(this.getPageIdFromHash());
                this.scrollToTabs();
            },
            showPage:function (pageName) {
                $('#content').html(this.view(this.lang(pageName), {}));
                this.updateIndicator(pageName);
                if (pageName == 'wanhattalot') {
                    new Lwt.Controllers.Gallery($('#gallery'));
                }
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
                var cssYPosition = Lwt.Controllers.Navigation.pageIdToSpritePos[pageId];
                $('#navigation-indicator').css("background-position", cssYPosition);
            }
        });
    });
