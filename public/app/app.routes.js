angular.module('app.routes', ['ngRoute'])

	.config(function($routeProvider, $locationProvider) {

		$routeProvider

		// The Routes for the home page
		// Frontpage
		.when('/', {
			templateUrl : 'app//shared/forside.html'
		})

		.when('/historie', 
		{
			templateUrl : 'app/views/pages/informationer/historie.html'
		})	

		.when('/contactForm', 
		{
			templateUrl : 'app/views/pages/informationer/contactForm.html'
		})

		.when('/kontakt', 
		{
			templateUrl : 'app/views/pages/informationer/kontakt.html'
		})

		.when('/kalender',{
			templateUrl: 'app/views/pages/kalender.html'
		})

		.when('/kontingent', {
			templateUrl: 'app/views/pages/informationer/kontingent.html'
		})

		.when('/nyt-medlem', {
			templateUrl: 'app/views/pages/informationer/nyt-medlem.html'
		})
		.when('/senior', {
			templateUrl: 'app/views/pages/senior.html'
		})
		.when('/ungdom', {
			templateUrl: 'app/views/pages/ungdom.html'
		})
// users
		.when('/login', {
			templateUrl : 'app/shared/login.html',
				controller : 'mainController',
				controllerAs : 'login'
		})
	//Show all users
		.when('/users', {
			templateUrl : 'app/views/pages/users/all.html',
				controller : 'userController',
				controllerAs : 'user'
		})

		// form to create a new user
		.when('/users/create', {
			templateUrl : 'app/views/pages/users/single.html',
				controller : 'userCreateController',
				controllerAs : 'user'
		})

		// page to edit a user
		.when('/users/:user_id', {
			templateUrl : 'app/views/pages/users/single.html',
				controller : 'userEditController',
				controllerAs : 'user'
		})
// spillere

	// show all spillere
		.when('/spillere', {
		templateUrl : 'app/views/pages/Spillere/all.html'
//				controller : 'spillerController',
//				controllerAs : 'spiller'

		})
		.when('/spillere/create', {
			templateUrl : 'app/views/pages/spillere/single.html',
				controller : 'spillerCreateController',
				controllerAs : 'spiller'
		})

		// page to edit a spiller
		.when('/spiller/:spiller_id', {
			templateUrl : 'app/views/pages/spillere/single.html',
				controller : 'spillerEditController',
				controllerAs : 'spiller'
		})

		.when('/test', {
			templateUrl : 'app/views/pages/spillere.html'

		})
		// get rid of the hash in the url
		$locationProvider.html5Mode(true);
		});
