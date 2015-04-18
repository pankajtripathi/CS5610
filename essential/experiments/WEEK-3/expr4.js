$(function(){
    $("#selectable").css({
        "list-style-type": "none",
        "margin": "0",
        "padding": "0",
        "width": "60%"
    });
    $("selectable li").css({
        "margin": "3px",
        "pading": "0.4em",
        "font-size": "1.4em",
        "height": "18px"
    });
    $("#selectable").selectable();
    $("#datepicker").datepicker();
})
