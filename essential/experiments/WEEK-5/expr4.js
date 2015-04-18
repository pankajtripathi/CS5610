var app = angular.module("RouteApp", ['ngRoute']);

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/home', {
            templateUrl: 'movieLib/home.html',
            controller: 'HomeCtrl'
        }).
        when('/about', {
            templateUrl: 'movieLib/about.html',
            controller: 'FavCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });
  }]);

app.controller("HomeCtrl", function ($scope,MovieService) {
    $scope.searchMovies = function () {
        MovieService.search($scope.searchByTitle, function (response) {
            $scope.movies = response;
        })
    }

    $scope.addToFav = function (m)
    {
        MovieService.addToFav(m);
    }
});

app.controller("FavCtrl", function ($scope, MovieService) {
    var fav = MovieService.getFav();
    console.log(fav);
    $scope.favMovies = fav;
});
