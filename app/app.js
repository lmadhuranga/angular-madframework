angular.module('myApp', ['ngResource','ui.router','Home.controllers','User.controllers'])
.run(function() {
   
}) 
.config(function($stateProvider) {
 
  $stateProvider    
    // setup an abstract state for the tabs directive
    .state('login', {
        url: '/login', 
        templateUrl: 'templates/login.html',
        controller:'DeskTopLoginController'
    })
    .state('home', {
        url: '/home', 
        templateUrl: 'templates/home.html',
        controller:'HomeController'
    }) 

});

 