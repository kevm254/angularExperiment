angular.module('myApp')
.controller('myController', ['$scope', 'personService', 'cleaningService', function($scope, personService, cleaningService){
    $scope.firstName = 'Super';
    $scope.lastName = 'Duper';
    $scope.clean = cleaningService.clean;
                                  
    $scope.printName = function(){ return personService.printName($scope.firstName, $scope.lastName) };
    
}])

.controller('AboutCtrl', ['$scope', '$routeParams',function($scope, $routeParams){
    $scope.input = $routeParams.param;
}])

.controller('ContactCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.input = $routeParams.param;
    
}])


