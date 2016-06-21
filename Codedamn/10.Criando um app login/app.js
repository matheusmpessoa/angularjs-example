var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'login.html'
    })
    .when('/home', {
        resolve: {
            "check": function($location){
                if(!$rootScope.loggedIn){
                    $location.path('/');
                }else{
                    templateUrl: 'home.html'
                }
            }
        }
    })
    .otherwise({
        redirectTo: '/'
    });
});

app.controller('loginCtrl', function($scope, $location, $rootScope) {
    $rootScope.submit = function () {
        if($scope.username == 'admin' && $scope.password == 'admin') {
            $rootScope.loggedIn = true;
            $location.path('/home');
        }else{
            alert("Algo errado!");
        }
    };
});