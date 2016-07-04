var app = angular.module("myApp", []);

app.controller('mainController', function ($scope) {
    $scope.players = [
        {name: 'Marcos', team: 'Palmeiras'},
        {name: 'Romário', team: 'Vasco'},
        {name: 'Ronaldinho', team: 'Barcelona'},
        {name: 'Pelé', team: 'Santos'},
        {name: 'Biro Biro', team: 'Curintia'}
    ];

    $scope.addPlayer = function () {
        $scope.players.push({
            name: $scope.inputData.name,
            team: $scope.inputData.team
        });
    }
});
