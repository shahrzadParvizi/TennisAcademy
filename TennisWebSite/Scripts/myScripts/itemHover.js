$(function () {
    $(".itemHover").mouseover(function () {
        $(this).css({
            backgroundColor: "#FF3399",
        });
        $(this).children("a").css({
            color:"white"
        });
    });

    $(".itemHover").mouseout(function () {
        $(this).css({
            backgroundColor: "white",
        });
        $(this).children("a").css({
            color: "#4e474e"
        });
    });

});