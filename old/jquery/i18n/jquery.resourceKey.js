(function($) {
    $.fn.replaceResourceKeys = function(T) {
        $("[resourceKey]", this).each(function() {
            var that = $(this);
            that.html(T(that.attr("resourceKey")).replace("\n", "<br/>"));
            that.removeAttr("resourceKey");
        })
    }
})($)