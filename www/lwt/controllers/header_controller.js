Lwt.Resources.Controller.extend('Lwt.Controllers.Header',
{
    onDocument: true
},
{
    load: function() {
		$('#date').html(this.lang('//lwt/views/date'), {});
    },
	
	'#language span click': function(element) {
		this.setLang(element.attr("id"));
	},

	setLang: function(lang) {
		if (lang != this.getLang()) {
			$.cookie('lwt_language', lang, { expires: 60 });
			window.location.reload();
		}
	}
});