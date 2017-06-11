var app = angular.module('Spectroll-app', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/shockproof',{
            templateUrl:'/templates/shockproof/index.html'
        })
        .when('/tinting',{
            templateUrl:'/templates/tinting/index.html'
        })
        .when('/architecture',{
            templateUrl:'/templates/architecture/index.html'
        })
        .when('/',{
            templateUrl:'/templates/main/index.html'
        })
});