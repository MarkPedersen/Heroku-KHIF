angular.module('userApp', [
	'authService',
	'mainCtrl',
	'userCtrl',
	'userService',
//	'spillerCtrl',
//	'spillerService',
	'ngAnimate',
	'app.routes'
	])

// application configuration to integrate token into requests
	.config(function($httpProvider) {
		// attach our auth interceptor to the http requests
		$httpProvider.interceptors.push('AuthInterceptor');
	});