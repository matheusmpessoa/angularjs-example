var app = angular.module("myApp", []);

app.factory('simpleFactory', function () {
    var factory = {};
    var artists = [
        {name: 'Dave Grohl', band: 'Foo Fighters'},
        {name: 'Brian Johnson', band: 'AC/DC'},
        {name: 'James Hetfield', band: 'Metallica'},
        {name: 'Dexter Holland', band: 'The Offspring'}
    ];

    factory.getArtists = function () {
        //Can use $http object to retrieve remote data
        //in a "real" app
        return artists;
    };
    return factory;
});

app.controller('myFactoryCtrl', function ($scope, simpleFactory) {
    $scope.artists = [];

    init();

    function init() {
        $scope.artists = simpleFactory.getArtists();
    }
});
