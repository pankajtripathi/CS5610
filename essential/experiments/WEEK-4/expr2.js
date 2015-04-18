$(function () {
    $(".Box").css({
        "position": "absolute",
        "width": "100px",
        "height": "100px",
        "padding": "0.5em",
        "background-color": "yellow"
    });

    $(".container").css({
        "width": "100%",
        "height": "12em"
    });

    $("#right").click(function () {
        $(".Box").animate({ "left": "+=100px" }, "slow");
    });

    $("#left").click(function () {
        $(".Box").animate({ "left": "-=100px" }, "slow");
    });

    $("#azure").click(function () {
        $(".Box")
            .css("background-color", "azure");
    });

    $("#red").click(function () {
        $(".Box")
            .css("background-color", "red");
    });

    $("#green").click(function () {
        $(".Box")
            .css("background-color", "green");
    });

    $("#small").click(function () {
        $(".Box")
          .animate({
              width: "50px",
              height: "50px"
          }, 1000)
    });

    $("#big").click(function () {
        $(".Box")
          .animate({
              width: "150px",
              height: "150px"
          }, 1000)
    });

        $("code").css({
            "color":"black",
            "background-color":"lightgreen"
        });
});

    