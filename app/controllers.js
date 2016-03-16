angular.module('Home.controllers',[])
.controller('HomeController', function($scope)
{

}) 


var UserModule =  angular.module('User.controllers',['DesktopUsers.service']);
//  user login details
UserModule.controller('DeskTopLoginController', function($scope,DesktopUser)
{ 
    $scope.desktop_login = function (desktop_user)
    { 
    	console.log('Login function');
    }

})

