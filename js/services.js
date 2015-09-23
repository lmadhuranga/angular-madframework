// initialise the service - sample
var SampleServices = angular.module('Sample.services', ['ngResource']);

// id is the parameter
SampleServices.factory('User', function ($resource) {
    return $resource('/members/:id', {}, {
        get: { method: 'POST' ,params: {id: '@id'}},
        post: { method: 'GET' ,params: {id: '@id'}},
        delete: { method: 'DELETE' ,params: {id: '@id'}}
    })
});

// no parameter and request
SampleServices.factory('Users', function ($resource) { 
    return $resource('/members/', {}, {
        get: { method: 'GET', isArray:true},
        create: { method: 'POST' }
    })
})
 

 
var PhoneService = angular.module('Phone.services', ['ngResource']);
// no parameter and request
PhoneService.factory('Phones', function ($resource) { 
    return $resource('http://angular.github.io/angular-phonecat/step-5/app/phones/phones.json', {}, {
        get: { method: 'GET', isArray:true} 
    })
})