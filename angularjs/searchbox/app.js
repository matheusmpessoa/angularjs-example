var fileX = {
    "records": [
        {
            "Name": "Matheus",
            "Age": "20",
            "Fav_color": "Azul"
        },
        {
            "Name": "Tatiana",
            "Age": "19",
            "Fav_color": "Rosa"
        },
        {
            "Name": "Rafael",
            "Age": "24",
            "Fav_color": "Verde"
        },
        {
            "Name": "Thais",
            "Age": "21",
            "Fav_color": "Azul"
        },
        {
            "Name": "Carla",
            "Age": "42",
            "Fav_color": "Roxo"
        },
        {
            "Name": "Luciano",
            "Age": "21",
            "Fav_color": "Vermelho"
        },
        {
            "Name": "Yuri",
            "Age": "13",
            "Fav_color": "Azul"
        }
    ]
}


var app = angular.module("myApp", []);

app.controller('people', function($scope) {
    $scope.persons = fileX.records;
});
