var app = angular.module("myApp", []);

/* Criando service */
app.service('random', function() {
    var num = Math.floor(Math.random()*10);
    this.generate = function() {
        return num;
    };
});

app.controller('mainController', function($scope, random) {
    $scope.generatorRandom = function() {
        /* A referencia do service é passada aqui */
        $scope.randomNumber = random.generate();
        console.log("Numero aleatorio gerado via service!");
    };
});
