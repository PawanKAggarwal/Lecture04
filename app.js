(function (){
	'use strict'; 
	
	
	
	
	angular.module('myFirstApp', [])
	
	.controller('MyFirstController', function($scope){
		$scope.name = "Pawan";
		$scope.sayHello = function(){
			return "Hello Coursera! " + $scope.name;
		};
		
	});
	
	
})();