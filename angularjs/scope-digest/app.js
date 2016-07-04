var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
    $scope.myRandomNumber = Math.random();
    document.querySelector('input').addEventListener('click', function($scope) {
        console.log('Botão clicado');
        $scope.myRandomNumber = Math.random();

    }, false);
});
