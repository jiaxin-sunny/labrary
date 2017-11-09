$(function () {
    $("#title div").on("click", function () {
        var id = $(this).attr("id");
        $("#" + id + "-content").siblings().hide();
        $("#" + id + "-content").show();
    });

    $("#register").on("click", function () {
        window.location.href="../register/register.html";
    });

    $("#userLogin").on("click", function () {
    });

    $("#managerLogin").on("click", function () {
    });
});