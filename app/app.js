angular.module('myApp', ['ngResource','ui.router','Home.controllers','User.controllers'])
.run(function() {
   
}) 
.config(function($stateProvider) {
 
  $stateProvider    
    .state('header', {
        abstract:true,  
        templateUrl: 'templates/header.html',
        controller:'HomeController'
    }) 
    // setup an abstract state for the tabs directive
    .state('header.login', {
        parent:'header',
        url: '/login', 
        templateUrl: 'templates/login.html',
        controller:'DeskTopLoginController'
    })
    .state('header.home', { 
        parent:'header',
        url: '/home', 
        templateUrl: 'templates/home.html' 
    })
    .state('header2', {
        abstract:true,  
        templateUrl: 'templates/header2.html' 
    })
    .state('header2.home', { 
        parent:'header2',
        url: '/home2', 
        templateUrl: 'templates/home.html' 
    })

});

 