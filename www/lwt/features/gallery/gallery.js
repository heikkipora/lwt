steal('jquery/controller',
    'jquery/controller/view',
    'lwt/lib/jquery.tooltip.js',
    'lwt/lib/jquery.lightbox-0.5.js',
    'lwt/lib/controller.js')
    .then(function ($) {
        Lwt.Controller('Lwt.Gallery', {
            init:function () {
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
