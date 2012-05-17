steal('jquery/controller',
    'jquery/controller/view',
    'lwt/lib/jquery.tooltip.js',
    'lwt/lib/jquery.lightbox-0.5.js',
    'lwt/lib/controller.js')
    .then('lwt/lib/jquery.lightbox-0.5.css')
    .then('//lwt/features/wanhattalot/wanhattalot_fi.tmpl')
    .then('//lwt/features/wanhattalot/wanhattalot_se.tmpl')
    .then(function ($) {
        Lwt.Controller('Lwt.Wanhattalot', {
            init:function () {
                $('#content').html(this.lang("//lwt/features/wanhattalot/wanhattalot"), {});
                $(".house[title]").tooltip({ position:"bottom center", offset:[-35, 0]});
                $('#jquery-lightbox a').live('click', function (event) {
                    event.preventDefault();
                });
            },
            '.house click':function (element) {
                var houseName = element.find('h2').text();
                element.find('a').lightBox({fixedNavigation:true});
                element.find('.first').click();	// launch lightbox..
                this.track('Talot', houseName);
            }
        });
    });
