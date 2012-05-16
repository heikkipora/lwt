steal('jquery/controller',
    'jquery/controller/view',
    'lwt/lib/controller.js')
    .then(function ($) {
        Lwt.Controller('Lwt.Content', {
            '.item .readmore click':function (element) {
                element.hide();
                var item = element.closest('.item');
                item.find('.more').slideDown('fast');
                item.find('img.thumb').hide();
                item.find('img.full').show();
                var itemTitle = item.find('h2').text();
                this.track('Ajankohtaista', itemTitle);
            },
            '.info-links span click':function (element) {
                var h1num = element.attr("id");
                $.scrollTo("h1:eq(" + h1num + ")", 400, {axis:'y', offset:{top:-8}});
                var linkText = element.text();
                this.track('Info', linkText);
            }
        });
    });
