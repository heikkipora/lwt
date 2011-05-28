//steal/js lwt/scripts/compress.js

load("steal/rhino/steal.js");
steal.plugins('steal/clean',function(){
	steal.clean('lwt/lwt.html',{indent_size: 1, indent_char: '\t'});
});
