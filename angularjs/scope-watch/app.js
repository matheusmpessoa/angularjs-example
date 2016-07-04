var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope) {
    $scope.counter = 0;
    $scope.$watch('myText', function(newValue, oldValue) {
        $scope.counter++;
        if($scope.counter == 100) {
            alert("100 interações");
        }
    });
});
