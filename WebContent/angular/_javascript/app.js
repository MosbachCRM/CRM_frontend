var crmTool = angular.module('crmTool', [
	'ngRoute', 'pascalprecht.translate'
]);

crmTool.config([
	'$routeProvider', function($routeProvider) {
		
		$routeProvider.when('/firstPage'), {
			templateURL : 'firstPage/firstPage',
			controller  : 'FirstPageController'
		}).when('/secondPage'), {
			templateURL : 'secondPage/secondPage',
			controller  : 'SecondPageController'
		}).otherwise({
			redirectTo	: '/firstPage'
		}
		
	});
	
	
	
	
	
]);