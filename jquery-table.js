(function ($) {
    var render = function (val, obj) {
        return val;
    };

    $.fn.table = function (option) {
        $(this).empty();

        if (option["caption"]) {
            var $caption = $("<caption></caption>").text(option["caption"]);
            $(this).append($caption);
        }

        var $trHead = $("<tr></tr>");
        for (var m = 0; m < option["colModel"].length; ++m) {
            var $tdHead = $("<td></td>").text(option["colModel"][m].title);
            if (option["colModel"][m].width) {
                $tdHead.css("width", option["colModel"][m].width);
            }
            $trHead.append($tdHead);
        }

        $(this).append($trHead);


        for (var n = 0; n < option["data"].length; ++n) {
            var $trbody = $("<tr></tr>");
            for (var i = 0; i < option["colModel"].length; ++i) {
                var tdRender = option["colModel"][i].render || render;
                var $tdbody1 = $("<td></td>");
                $tdbody1.html(tdRender(option["data"][n][option["colModel"][i].code], option["data"][n]));
                $trbody.append($tdbody1);
            }
            $(this).append($trbody);
        }
    };
})(jQuery);