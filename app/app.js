(function(){
    var conceptApp = angular.module('conceptApp', ['ngRoute']);
    
    conceptApp.config(function($routeProvider){
        $routeProvider
        .when('/',{
            controller:'refsController as cntrl',
            templateUrl:'app/views/refsList.html'
        })
        .when('/new/',{
            controller:'newRefController as cntrl',
            templateUrl:'app/views/newRef.html'
        })
        .when('/edit/:index',{
            controller:'editRefController as cntrl',
            templateUrl:'app/views/editRef.html'
        })
        .otherwise({redirectTo:'/'});
    });
}());