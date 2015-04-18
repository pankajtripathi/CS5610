var app = angular.module("MyApp", ["ngRoute"]);

app.config(function($routeProvider, $httpProvider) {
    $routeProvider
      .when('/home', {
          templateUrl: 'views/home/home.html'
      })
      .when('/contact', {
          templateUrl: 'views/contact/contact.html'
      })
      .when('/profile', {
          templateUrl: 'views/profile/profile.html',
          resolve: {
              loggedin: checkLoggedin
          }
      })
      .otherwise({
          redirectTo: '/home'
      });
});

var checkLoggedin = function($q, $timeout, $http, $location, $rootScope)
{
    var deferred = $q.defer();

    $http.get('/loggedin').success(function(user)
    {
        $rootScope.errorMessage = null;
        console.log(user);
        // User is Authenticated
        if (user !== '0')
        {
            $rootScope.currentUser = user;
            deferred.resolve();
        }
        // User is Not Authenticated
        else
        {
            $rootScope.errorMessage = 'You need to log in.';
            
            deferred.reject();
            $location.url('/index');
        }
    });
    
    return deferred.promise;
};

app.controller("LoginCtrl", function($scope, $http, $location, $rootScope){
    $scope.login = function(user){
        //console.log(user);
        $http.post("/login", user)
        .success(function(response){
        	$scope.profile="user";
            console.log(response);
            $rootScope.currentUser = response;
            $location.url("/profile");
            angular.element('#modalClose').trigger('click');
        });
    }
    
    $scope.logout = function(){
        //console.log(user);
        $http.post("/logout")
        .success(function(response){
        	$scope.profile=null;
            console.log(response);
            $rootScope.currentUser = response;
            $location.url("/home");
        });
    }
    
    $scope.register = function(user){
    	console.log(user);
    	if(user.password != user.password2 || !user.password || !user.password2)
    	{
    		$rootScope.message = "Your passwords don't match";
    		$scope.regError = "Your passwords don't match";
    	}
    	else
    	{
    		$scope.regError = null;
    		$http.post("/register", user)
    		.success(function(response){
    			console.log(response);
    			if(response != null)
    			{
    				$rootScope.currentUser = response;
    				angular.element('#modalClose').trigger('click');
    				$location.url("/profile");
    				$scope.profile = "user";
    			}else{
    				$scope.regError = "Some issue in registration. Please try again";
    			}
    		});
    	}
    }
});

