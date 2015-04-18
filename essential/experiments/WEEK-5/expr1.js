var app = angular.module("controllerDemo", []);
app.controller("expController",

    function ($scope, $http) {

        $scope.favMovies = [];
        $scope.addToFav = function (m) {
            $scope.favMovies.push(m);
        }

        $scope.removeFavMovie = function (m) {
            var index = $scope.favMovies.indexOf(m);
            $scope.favMovies.splice(index, 1);
        }
        //Use $http.get(url) for JSON and $http.jsonp(url) for jsonp 

        $scope.searchMovies = function () {

            var title = $scope.searchByTitle;
            $http.jsonp("http://www.myapifilms.com/imdb?title="+title+"&format=JSONP&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=10&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N&callback=JSON_CALLBACK")
            .success(function (response) {
                $scope.movies = response;
                console.log(response);
            })
        }
        

        $scope.removeMovie = function (m) {
            var index = $scope.movies.indexOf(m);
            console.log(index);
            $scope.movies.splice(index, 1);
        }
        $scope.addMovie = function () {
            var newMovie = { title: $scope.m.title, rating: $scope.m.rating, plot: $scope.m.plot };
            $scope.movies.push(newMovie);
        };
    });