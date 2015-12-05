angular.module('myApp')
.factory('personService', function(){
    var person = {};
    
    person.printName = function(firstName, lastName){
        return firstName + ' ' + lastName;
    }
    return person;
})
.service('cleaningService', function(){
    var service = {};
    service.clean = "we are now super clean";
    
    return service;
})

