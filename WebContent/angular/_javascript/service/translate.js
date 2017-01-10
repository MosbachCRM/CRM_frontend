var crmTool = angular.module('crmTool');
crmTool.config([
	'$translateProvider', funktion($translateProvider) {
		$translateProvider.translations('de', {
			
		});
	
		$translateProvider.translations('en', {
			
		});
		
		$translateProvider.useSanitizeValueStrategy('escape');
		$translateProvider.preferredLanguage('de');
	}
	
	
]);