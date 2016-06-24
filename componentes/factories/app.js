var app = angular.module("myApp", []);

/* Criando factory */
app.factory('mainController', function() {
    var randomObject = {};
    var num = Math.floor(Math.random()*10);
    randomObject.generate = function() {
        return num;
    };
   return randomObject;
});

app.controller('myCtrl', function($scope, random) {
    $scope.generatorRandom = function() {
        $scope.randomNumber = random.generate();
        console.log("Numero aleatorio gerado via factory!");
    };
});
