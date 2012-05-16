steal('jquery/controller',
    'jquery/controller/view',
    'jquery/view/tmpl',
    'lwt/lib/controller.js')
    .then('lwt/lib/jquery.ba-hashchange.js')
    .then('lwt/lib/jquery.scrollTo.js')
    .then('lwt/lib/jquery.nivo.slider.js')
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
    .then('lwt/features/gallery')
    .then('lwt/features/content')
    .then(function ($) {
        Lwt.Controller('Lwt.Navigation', {
            init:function () {
                $('#slider').html(this.lang('//lwt/features/navigation/slider'), {});
                $('#slider').nivoSlider({directionNav:false, controlNav:false, pauseOnHover:false});
                $(window).hashchange(this.callback('hashChangeEvent'));
                $('#tabs').removeClass('fi se').addClass(this.getLang());
                $('#navigation-indicator').removeClass('fi se').addClass(this.getLang());
                this.showPage(this.getPageIdFromHash());
                $('#footer').html(this.lang('//lwt/features/navigation/yhteystiedot'), {});
                $('#ext-links').html(this.lang('//lwt/features/navigation/ext-links'), {});
                $('#content').lwt_content();
            },
            pageIdToSpritePos:{ "ajankohtaista":"0 0px", "wanhattalot":"0 -25px", "kartta":"0 -50px", "info":"0 -75px", "messulehti":"0 -100px" },
            hashChangeEvent:function () {
                this.showPage(this.getPageIdFromHash());
                this.scrollToTabs();
            },
            showPage:function (pageName) {
                $('#content').html(this.lang("//lwt/features/navigation/" + pageName), {});
                this.updateIndicator(pageName);
                if (pageName == 'wanhattalot') {
                   $('#gallery').lwt_gallery();
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
                var cssYPosition = this.pageIdToSpritePos[pageId];
                $('#navigation-indicator').css("background-position", cssYPosition);
            }
        });
    });
