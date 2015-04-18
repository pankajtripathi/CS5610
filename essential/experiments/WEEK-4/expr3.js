var app = angular.module("controllerDemo", []);
app.controller("expController",
    function ($scope) {
        console.log("Controller Demo");
        var name = { fName: "", lName: "" };
        $scope.name = name;
});
