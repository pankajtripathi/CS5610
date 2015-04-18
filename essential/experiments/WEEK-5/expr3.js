var app = angular.module("RouteApp", ['ngRoute']);

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/home', {
            templateUrl: 'partials/home.html'

        }).
        when('/about', {
            templateUrl: 'partials/about.html'

        }).
          when('/contact', {
              templateUrl: 'partials/contact.html'

          }).
        otherwise({
            redirectTo: '/home'
        });
  }]);