var SampleModule =  angular.module('Sample.controllers',['ngRoute','Sample.services','Phone.services']);

//  Appreciation delte
SampleModule.controller('SampleControllerss', function($scope,Users)
{
    console.log('SampleControllerss Loaded');


}).controller('TestController', function($scope)
{
    console.log('TestController Loaded');

}) .controller('PhoneListController', function($scope, Phones)
{
    console.log('PhoneListController Loaded');
	$scope.phones = (Phones.query());

}) 
.controller('HomeController', function($scope)
{
    console.log('HomeController Loaded ');

});


