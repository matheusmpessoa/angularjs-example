var app = angular.module("myApp", []);

app.controller('people', function($scope, $http) {
 $http.get('http://127.0.0.1:51728/Codedamn/11.$httpservice/database.json')
    .success(function(response){
        $scope.persons = response.records;
    });
});
