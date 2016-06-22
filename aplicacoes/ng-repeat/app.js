var app = angular.module("myApp", []);

app.controller("mainController", function ($scope) {
    $scope.myFavLan = [
        { name: "JavaScript",   extension: ".js" },
        { name: "PHP",   extension: ".php" },
        { name: "C++",   extension: ".cpp" },
        { name: "Ruby",   extension: ".rb" }
    ];
});

app.controller('FooCtrl', function($scope) {
   $scope.products = [
       { id: 1, name: 'test', color: 'red' },
       { id: 2, name: 'bob', color: 'blue' }
       /*... etc... */
   ];
});
