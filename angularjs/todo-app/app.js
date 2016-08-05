var app = angular.module("myApp", []);

app.controller('myCtrl', function ($scope) {
    $scope.tasks = [];
    $scope.searchEnter = function () {
        if (event.which == 13 && $scope.task != "") {
            $scope.addTask();
        }
    };
    $scope.addTask = function () {
        $scope.tasks.push($scope.task);
        console.log($scope.tasks);
        $scope.task = '';
    };
});
