var crmTool = angular.module('crmTool', [
	'ngRoute', 'pascalprecht.translate'
]);

crmTool.config([
	'$routeProvider', function($routeProvider) {
		
		$routeProvider.when('/'), {
			templateURL : 'logon/logon.html',
			controller  : 'logOnCtrl'
		}).otherwise({
			redirectTo	: '/logon'
		}
		
	});
	
	
	
	
	
]);