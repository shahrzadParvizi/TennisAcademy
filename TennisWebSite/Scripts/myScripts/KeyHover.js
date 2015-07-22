$(function () {
    $(".hoverAble").mouseover(function () {
        $(this).css({
            backgroundColor: "#FF3399"
        });
    });

    $(".hoverAble").mouseout(function () {
        $(this).css({
            backgroundColor: "#00477c"
        });
    });

});