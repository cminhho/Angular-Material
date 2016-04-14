var app = angular.module('toolBar', ['ngMaterial']);

	app.config(function($mdThemingProvider) {

		$mdThemingProvider.definePalette('minskTheme', {
		  '50': '#c4bae0',
		  '100': '#9885c8',
		  '200': '#775fb7',
		  '300': '#55408e',
		  '400': '#493679',
		  '500': '#3c2d64',
		  '600': '#2f244f',
		  '700': '#231a3a',
		  '800': '#161125',
		  '900': '#090710',
		  'A100': '#ff80ab',
		  'A200': '#ff4081',
		  'A400': '#f50057',
		  'A700': '#c51162',
		  'contrastDefaultColor': 'light',
		  'contrastDarkColors': '50 100 A100 A200'
		});
	  	
		$mdThemingProvider.definePalette('summerSkyTheme', {
		  '50': '#ffffff',
		  '100': '#cfecf9',
		  '200': '#9dd8f2',
		  '300': '#5ebfea',
		  '400': '#43b5e7',
		  '500': '#28aae3',
		  '600': '#1b9ad1',
		  '700': '#1886b6',
		  '800': '#14729b',
		  '900': '#115e80',
		  'A100': '#ffffff',
		  'A200': '#cfecf9',
		  'A400': '#43b5e7',
		  'A700': '#1886b6',
		  'contrastDefaultColor': 'light',
		  'contrastDarkColors': '50 100 200 300 400 500 A100 A200 A400'
		});

		$mdThemingProvider.theme('secondaryTheme')
			.primaryPalette('summerSkyTheme');
			
		$mdThemingProvider.theme('default')
			.primaryPalette('minskTheme');

});

