$(function () {
    $("#reset").click(function () {
        $("#text").val("huahua");
        $("#author").val("zhangjx");
        $("#key").val("1");
        $("#item").val("spring");
    });

    $("#find").click(function () {
        $.get("book-info.json", function (data) {
            $("#search-show").table({
                colModel: [{
                    code: "input",
                    title: "选择框",
                    width: "50px",
                    render: function (colVal, rowObj) {
                        var $input = $('<input type="checkbox" name="select">');
                        for (var key in rowObj) {
                            $input.attr(key, rowObj[key]);
                        }
                        return $input;
                    }
                }, {
                    code: "name",
                    title: "书名",
                    width: "200px"
                }, {
                    code: "author",
                    title: "作者",
                    width: "100px"
                }, {
                    code: "publish",
                    title: "出版社",
                    width: "150px"
                }],
                data: data.book || []
            });
        });
    });

    $("#add").click(function () {
        window.location.href = "new_book.html";
    })

    $("#del").click(function () {
        $(":checked").parent().parent().remove();
    })

    $("#change").click(function () {
        var $checked = $(":checked");
        if ($checked.length == 0) {
            console.log("length == 0");
            return false;
        }
        if ($checked.length > 1) {
            console.log("length > 1");
            return false;
        }

        console.log($checked);
        var name = $($checked[0]).attr("name");
        var author = $($checked[0]).attr("author");
        var publish = $($checked[0]).attr("publish");
        window.location.href = "change_book.html?name=" + name + "&author=" + author + "&publish=" + publish;
    })
});