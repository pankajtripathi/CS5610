var app = angular.module("controllerDemo", []);
app.controller("expController",
    function ($scope) {
        var students = [
            {name: "Pankaj", major: "Computer Science", univ: "NEU" },
            {name: "Abhishek", major: "Computer Science", univ: "NEU" },
            {name: "Siddharth", major:"Electronics", univ:"UPENN"},
            {name: "Monil", major:"Computer Science", univ:"USC"}
        ]

        $scope.students = students;
        $scope.removeStudent = function (s)
        {
            var index = $scope.students.indexOf(s);
            console.log(index);
            $scope.students.splice(index, 1);
        }
        $scope.addStudent = function ()
        {
            var newStudent = { name: $scope.s.name, major: $scope.s.major, univ: $scope.s.univ };
            $scope.students.push(newStudent);
        };
});