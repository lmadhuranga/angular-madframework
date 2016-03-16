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


var UtilService = angular.module('Util.service', ['ngResource'])
.factory('$localstorage', ['$window', function($window) {
	return {
		set: function(key, value) {
			$window.localStorage[key] = value;
		},
		get: function(key, defaultValue) {
			return $window.localStorage[key] || defaultValue;
		},
		setObject: function(key, value) {
			$window.localStorage[key] = JSON.stringify(value);
		},
		getObject: function(key) {
			return JSON.parse($window.localStorage[key] || '{}');
		}
	}
}])
.factory('myalert', function () {
    return {
    	confirm:function(msg) {
    		if (confirm("Are you sure"))
			{
				return true;
			}
			else
			{
				console.log('Cancel the delete');			
				return false;
			}
    	}
    	,succes:function(msg) {
    		alert('Update success full');
    		return true;
    	}
    	,error:function(msg) {
    		alert(msg);
    		return true;
    	}
    	,info:function(msg) {
    		alert(msg);
    		return true;
    	}
    }
}); 

