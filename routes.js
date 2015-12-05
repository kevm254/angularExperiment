angular.module('myApp')
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .when('/about/:param', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        }) 
        .when('/contact/:param', {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
        })
        .otherwise({
            redirectTo: '/',
            templateUrl: 'views/home.html'
        
        })
    
    $locationProvider.html5Mode(true);
}]);
