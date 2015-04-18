var app = angular.module("CMApp", []);
app.controller("cmappController", function ($scope, $http) {

    $scope.selectedEmp = null;
    $scope.selectedIdx = null;
    $scope.select = function (index)
    {
        $scope.selectedIdx=index;
        $scope.selectedEmp = $scope.employee[index];
    }

    $scope.add = function (emp) {
        console.log(emp);
        $http.post("/api/employee/", emp)
        .success(function (response)
        {
            $scope.employee = response;
        });
    }

    $scope.remove = function (index) {
        $http.delete("/api/employee/" + index)
        .success(function (response)
        {
            $scope.employee = response;
        });
    }

    $http.get("/api/employee")
    .success(function (response)
    {
      $scope.employee = response;
    });

});