var app = angular.module("myApp", []);

app.controller('people', function ($scope, $http) {
    $http.get('http://127.0.0.1:55103/componentes/$httpservice/database.json')/*Caminho indicado para executar o exemplo*/
        .success(function (response) {
            $scope.persons = response.records;
        });
});
