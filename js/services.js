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
 