'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp',['Sample.controllers','ngRoute']);


myApp.config(['$routeProvider',
                    function($routeProvider)
                    {
                        $routeProvider.when('/', 
                                        {
                                            templateUrl: 'views/home.html',
                                            controller: 'HomeController' 
                                        })
                                        .when('/test/', 
                                        { 
                                            templateUrl: 'views/test.html',
                                            controller: 'TestController'
                                            
                                        }).when('/phones/', 
                                        { 
                                            templateUrl: 'views/phoneslist.html',
                                            controller: 'PhoneListController'
                                            
                                        }).when('/sample', 
                                        { 
                                            templateUrl: 'views/sample.html',
                                            controller: 'SampleControllerss'
                                            
                                        })
                                        .otherwise({redirectTo: '/'});
                    }
                ]);
				
 
