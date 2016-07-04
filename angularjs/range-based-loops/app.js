var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope) {
    var range = new Array(100);
    $scope.range = range;
});
