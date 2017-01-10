var crmTool = angular.module('crmTool', [
	'ngRoute', 'pascalprecht.translate'
]);

crmTool.config([
	'$routeProvider', function($routeProvider) {
		
		$routeProvider.when('/logon'), {
			templateURL : 'logon/logon.html',
			controller  : 'FirstPageController'
		}).when('/secondPage'), {
			templateURL : 'secondPage/secondPage.html',
			controller  : 'SecondPageController'
		}).otherwise({
			redirectTo	: '/logon'
		}
		
	});
	
	
	
	
	
]);