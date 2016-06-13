angular.module('spillerService', [])

	.factory('Spiller', function($http) {
		
		// creation of object
		var spillerFactory = {};

		// get specific spiller
		spillerFactory.get = function(id) {
			return $http.get('/api/spillere/' + id)
		};


		// function - get all the spillere
		spillerFactory.all = function() {
			return $http.get('/api/spillere');
		};


		// create a new spiller
		spillerFactory.create = function(spillerData) {
			return $http.post('/api/spillere', spillerData);
		};
		// update spiller
		spillerFactory.update = function(id, spillerData) {
			return $http.put('/api/spillere/' + id, spillerData);
		};
		// delete spiller
		spillerFactory.delete = function(id) {
			return $http.delete('/api/spillere/' + id);
		};

	// return our entire spillerFactory object
		return spillerFactory;
	});