$(function(){
    var genres = ["Comedy", "Drama", "Action", "Sci-fi"];
    var ul = $("ul#genre");
    ul.empty();

    for (var i in genres) {
        var li = $("<li>" + genres[i] + "</li>");
        ul.append(li);
    }
    
    var actor = {
        fName: "Christian",
        lName: "Bale"
    };

    var actorDom = $("#actor");
    var fName = actorDom.find("#firstName"); 
    var lName = actorDom.find("#lastName");
    fName.html(actor.fName);
    lName.html(actor.lName);

    var actorList = [
        { fName: "Learnado", lName: "DiCaprio" },
        { fName: "Marlon", lName: "Brando" },
        { fName: "Robert", lName: "DeNiro" },
        { fName: "Al", lName: "Pacino" },
    ];

    var table = $("#actors");
    for (var j in actorList) {
        var a = actorList[j];
        var tr = $("<tr>");
        var td = $("<td>");
        td.append(a.fName);
        tr.append(td);
        td = $("<td>");
        td.append(a.lName);
        tr.append(td);
        table.append(tr);
    }
});