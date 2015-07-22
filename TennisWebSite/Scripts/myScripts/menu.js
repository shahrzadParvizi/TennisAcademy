$(function () {
    $("#mid > #menu div").mouseover(function () {
        $(this).css({
            "background-color": "#FF3399"
        })
    });
        

    $("#mid > #menu div").mouseout(function(){
        $(this).css({
            backgroundColor: "#00477c"
        })
    });
});