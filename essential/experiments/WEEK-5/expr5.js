var app = angular.module("MyNoteApp", []);
app.controller("myNoteCtrl", function ($scope) {
    $scope.notes = [];
    $scope.message = "";
    $scope.left = function () {
        var rem = 100 - $scope.message.length;
        return rem;
    };
    $scope.clear = function ()
    {
        $scope.message = "";
    };
    $scope.save = function () {
        $scope.currentDate = new Date();
        var note = {
            title: $scope.message,
            date:$scope.currentDate
        }
        $scope.notes.push(note);
    };
});
