var app = angular.module("CMApp", []);
app.controller("cmappController", function ($scope, $http) {

    $scope.add = function (dev) {
        console.log(dev);
        $http.post("/developer", dev)
        .success(function (response) {
            $scope.developer = response;
        });
    }

    $scope.remove = function (index) {
        developer = $scope.developer[index];
        $http.delete("/developer/" + developer._id)
        .success(function (response) {
            $scope.developer = response;
        });
    }

    $http.get("/developer")
    .success(function (response) {
        $scope.developer = response;
    });

});