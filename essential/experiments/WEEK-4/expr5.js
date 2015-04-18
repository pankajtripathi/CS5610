var app = angular.module("controllerDemo", []);
app.controller("expController",
    function ($scope) {
        $scope.add = function () {
            var num1 = $scope.num1;
            var num2 = $scope.num2;
            $scope.output = parseInt(num1) + parseInt(num2);
        }

        $scope.sub = function () {
            var num1 = $scope.num1;
            var num2 = $scope.num2;
            $scope.output = parseInt(num1) - parseInt(num2);
        }

        $scope.divide = function () {
            var num1 = $scope.num1;
            var num2 = $scope.num2;
            $scope.output = parseInt(num1) / parseInt(num2);
        }

        $scope.multiply = function () {
            var num1 = $scope.num1;
            var num2 = $scope.num2;
            $scope.output = parseInt(num1) * parseInt(num2);
        }
    });