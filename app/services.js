// initialise the service - sample
var DesktopUsersServices = angular.module('DesktopUsers.service', ['ngResource']);

// id is the parameter
DesktopUsersServices.factory('DesktopUser', function ($resource) {
    return $resource('http://localhost/rest_api/members/:id', {}, {
        get: { method: 'GET'},
        query: { method: 'GET' ,params: {id: '@id'}},
        update: { method: 'PUT' ,params: {id: '@id'}},
        post: { method: 'POST' ,params: {id: '@id'}},
        delete: { method: 'DELETE' ,params: {id: '@id'}}
    });
}); 