steal('jquery/controller',
    'jquery/controller/view',
    'lwt/lib/controller.js')
    .then('//lwt/features/ajankohtaista/ajankohtaista_fi.html')
    .then('//lwt/features/ajankohtaista/ajankohtaista_se.html')
    .then(function ($) {
        Lwt.Controller('Lwt.Ajankohtaista', {
            init: function() {
                $('#content').html(this.lang("//lwt/features/ajankohtaista/ajankohtaista"), {});
                if ($('#content .item').length == 1) {
                    $('#content .item:first-child .readmore').click();
                }
            },
            '.item .readmore click':function (element) {
                element.hide();
                var item = element.closest('.item');
                item.find('.more').slideDown('fast');
                item.find('img.thumb').hide();
                item.find('img.full').show();
                var itemTitle = item.find('h2').text();
                this.track('Ajankohtaista', itemTitle);
            }
        });
    });
