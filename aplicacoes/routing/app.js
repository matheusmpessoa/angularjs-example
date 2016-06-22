var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        template: 'Welcome user!'
    })
    .when('/anotherPage', {
        template: 'Welcome user, again!'
    })
    .otherwise({
        redirectTo: '/'
    });
});
