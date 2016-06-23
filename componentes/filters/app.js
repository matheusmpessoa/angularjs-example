var app = angular.module("myApp", []);

app.controller('myCtrl', function($scope) {

    $scope.nomeInit = function(value) {
        $scope.name = "Matheus";
    }

    $scope.priceInit = function(value) {
        $scope.price = 1914;
    }

    $scope.todayInit = function(value) {
        $scope.today = new Date();
    }

    $scope.filtroInit = function(value) {
        $scope.filtro = "a";
        $scope.times = [
            'Palmeiras',
            'Vasco',
            'Internacional',
            'Grêmio',
            'Fluminense',
            'Flamengo',
            'Ponte Preta',
            'Santos',
            'São Paulo',
            'Curintia'
        ];
    }

    $scope.filterTableInit = function(value) {
        $scope.cidades = [
            {name:'São Paulo',estados:'SP'},
            {name:'Brasília',estados:'DF'},
            {name:'Rio de Janeiro',estados:'RJ'},
            {name:'Curitiba',estados:'PR'},
            {name:'Salvador',estados:'BA'}
        ];

        $scope.orderByMe = function(info) {
            $scope.myOrderBy = info;
        }
    }
});
