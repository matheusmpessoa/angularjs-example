var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope) {
    $scope.info = "Olá! Eu venho do controller e sou exibido através do bind";
});
