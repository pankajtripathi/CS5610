$(function () {
    $("h1").css({
        "color": "red",
        "background-color": "yellow"
    });
    $("p#second").css({
        "color": "green"
    });
    $("p.first").css({
        "background-color": "lightblue"
    });
    $(".whiteBg").css({
        "color": "white"
    });
    $("p#second").append("Added new content using append");
    $("p#second").append("<p>This is new paagraph added via jQuery</p>");
    var newParagraph = $("<p>This is new paragraph added with a variable</p>");
    $("p.first").prepend(newParagraph);
    newParagraph.css({ "color": "red" });
});