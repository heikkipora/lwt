Lwt.Resources.Controller.extend('Lwt.Controllers.Gallery',
{},
{
	init : function() {
		$(".house[title]").tooltip({ position: "bottom center", offset: [-35, 0]});
		$('#jquery-lightbox a').live('click', function (event) {
			event.preventDefault();
		});
    },

	'.house click': function(element) {
		var houseName = element.find('h2').text();
		element.find('a').lightBox({fixedNavigation: true});
		element.find('.first').click();	// launch lightbox..
		this.track('Talot', houseName);
	}
});
