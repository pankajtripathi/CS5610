$(function () {
    $("#movieInfo").click(function () {
        var title = $("#title").val();
        $.ajax({
            url: "http://www.myapifilms.com/imdb?title="+title+"&format=JSONP&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=10&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N",
            dataType: "jsonp",
            success: displayMovies
        });
    })   
});
function displayMovies(movies)
{
    var parent = $("#movies");
    var temp = parent.find(".template");
    parent.empty();
    for(var m in movies)
    {
        var movie = (movies[m]);
        var titles = movie.title;
        var ratings = movie.rating;
        var poster = movie.urlPoster;
        var item = temp.clone();
        item.find(".title").html(titles);
        item.find(".rating").html(ratings);
        item.find(".moviePoster").attr("src", poster);
        parent.append(item);
    }
}
$(function () {
    $("code").css({
        "color":"black",
        "background-color":"lightgreen"
    })
});