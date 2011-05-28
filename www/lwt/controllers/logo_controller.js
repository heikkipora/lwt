Lwt.Resources.Controller.extend('Lwt.Controllers.Logo',
{
    onDocument: true
},
{
    load: function() {
	    $('#logo').removeClass('fi se').addClass(this.getLang());
    }
});