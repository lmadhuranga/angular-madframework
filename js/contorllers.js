var SampleModule =  angular.module('Sample.controllers',['ngRoute']);

//  Appreciation delte
SampleModule.controller('SampleControllerss', function($scope,Users)
{
    console.log('SampleControllerss Loaded');
    
}).controller('TestController', function($scope)
{
    console.log('TestController Loaded');
}) 
.controller('HomeController', function($scope)
{
    console.log('HomeController Loaded ');
});


