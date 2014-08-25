steal('jquery/view')
.then(
    './lib/transparency.js',
    '../../i18n/jquery.resourceKey.js'
)
.then(function(){
    $.View.Transparency = {
        createTemplate : function(templateText) {
            var tmpl = $(templateText)
            // localizeTemplate(tmpl)
            return tmpl
        }
    }
	$.View.register({
        location : "jquery/view/transparency",
		suffix : "html",
		renderer: function( id, templateText ) {
			var tmpl = $.View.Transparency.createTemplate(id, templateText)
			return function(data, directives){
				return tmpl.render(data, directives);
			};
		},
        script : function( id, templateText ) {
            var escaped = templateText.replace(/\n/g, "").replace(/\"/g, "\\\"")
            return "function(data, directives) { var tmpl=$.View.Transparency.createTemplate('"+ escaped +"'); return tmpl.render(data, directives)}" }
	});
	$.View.ext = ".html"

    function localizeTemplate(tmpl) {
        tmpl.replaceResourceKeys(T)
    }
})
