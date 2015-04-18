var app = angular.module("controllerDemo", []);
app.controller("MovieSearchCtrl",

    function ($scope, $http) {
        //Use $http.get(url) for JSON and $http.jsonp(url) for jsonp 

        $scope.searchMovies = function () {

            var title = $scope.searchByTitle;
            $http.jsonp("http://api.rottentomatoes.com/api/public/v1.0/movies.json?q="+title+"&page_limit=10&page=1&apikey=g7rx7yxzn99upr85jtnetmva&callback=JSON_CALLBACK")
            .success(function (response) {
                $scope.movies = response.movies;
                console.log(response);
            })
        }
    });