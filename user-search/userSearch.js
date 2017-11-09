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
});