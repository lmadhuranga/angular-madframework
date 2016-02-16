// initialise the service - sample
var DesktopUsersServices = angular.module('DesktopUsers.service', ['ngResource']);

// id is the parameter
DesktopUsersServices.factory('DesktopUser', function ($resource) {
    return $resource('http://ssss.com/members/:id', {}, {
        get: { method: 'POST' ,params: {id: '@id'}},
        post: { method: 'GET' ,params: {id: '@id'}},
        delete: { method: 'DELETE' ,params: {id: '@id'}}
    });
}); 