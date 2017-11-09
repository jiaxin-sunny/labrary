$(function () {
    //获取url中的参数
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return decodeURI(r[2]); return null; //返回参数值
    }
    
    var name = getUrlParam("name");
    var author = getUrlParam("author");
    var publish = getUrlParam("publish");
    $("#name").val(name);
    $("#author").val(author);
    $("#publish").val(publish);
    
    $("#change_result").click(function () {

    })
})