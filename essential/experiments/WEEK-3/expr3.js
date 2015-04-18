$(function () {
    $("#draggableBox").css({
        "width": "100px",
        "height": "100px",
        "padding": "0.5em",
        "background-color": "green",
        "float":"left"
    });
    $("#droppableBox").css({
        "width": "150px",
        "height": "150px",
        "padding": "0.5em",
        "clear": "both",
        "background-color": "blue",
        "margin": "10px"
    });
    $("img#imageEx").draggable();
    $("#draggableBox").draggable();
    $("#droppableBox").droppable({
        drop: function (event, ui) {
            $(this)
              .addClass("ui-state-highlight")
              .find("p")
                .html("Dropped!");
        }
    });
})