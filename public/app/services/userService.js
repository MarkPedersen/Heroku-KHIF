angular.module('userService', [])

	.factory('User', function($http) {
		
		// creation of object
		var userFactory = {};

		// get specific user
		userFactory.get = function(id) {
			return $http.get('/api/users/' + id)
		};

		// function - get all the users
		userFactory.all = function() {
			return $http.get('/api/users');
		};

		// create a new user
		userFactory.create = function(userData) {
			return $http.post('/api/users', userData);
		};
		// update user
		userFactory.update = function(id, userData) {
			return $http.put('/api/users/' + id, userData);
		};
		// delete user
		userFactory.delete = function(id) {
			return $http.delete('/api/users/' + id);
		};

	// return our entire userFactory object
		return userFactory;
	});
