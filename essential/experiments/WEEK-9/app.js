var app = angular.module("MyApp", ["ngRoute"]);

console.log("hello");

app.config(function($routeProvider, $httpProvider) {
    $routeProvider
      .when('/home', {
          templateUrl: 'views/home/home.html'
      })
      .when('/contact', {
          templateUrl: 'views/contact/contact.html'
      })
/*      .when('/profile', {
          templateUrl: 'views/profile/profile.html',
          controller: 'ProfileCtrl',
          resolve: {
              loggedin: checkLoggedin
          }
      })*/
      .otherwise({
          redirectTo: '/home'
      });
});

app.controller("LoginCtrl", function($scope, $http, $location, $rootScope){
    $scope.login = function(user){
        console.log(user);
        $http.post("/login", user)
        .success(function(response){
            console.log(response);
            $rootScope.currentUser = response;
            $location.url("/home");
        });
    }
    
});
