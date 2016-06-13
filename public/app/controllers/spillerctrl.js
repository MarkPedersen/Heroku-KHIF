angular.module('spillerCtrl', ['spillerService'])

	.controller('spillerController', function(Spiller) {
		var vm = this;
		vm.processing = true;
		Spiller.all()
			.success(function(data) {
				vm.processing = false;
				vm.spillere = data;
			});


		// delete a spiller
		vm.deleteSpiller = function(id) {
			vm.processing = true;
			Spiller.delete(id)
				.success(function(data) {
					Spiller.all()
						.success(function(data) {
							vm.processing = false;
							vm.spillere = data;
						});
				});
		};
	})




	// Controller for spiller creation page
	.controller('spillerCreateController', function(Spiller) {
		var vm = this;

		// variable to show/hide elements of the view
		// differentiates between create or edit pages
		vm.type = "create";

		// function to create a spiller
		vm.saveSpiller = function() {
			vm.processing = true;

			// clear the message
			vm.message = "";

			// use the create function in the spillerService
			Spiller.create(vm.spillerData)
				.success(function(data) {

					// clear the form
					vm.spillerData = {};
					vm.message = data.message;
					$location.path('spillere')
				});
		};
	})

	.controller('spillerEditController', function($routeParams, $Location, Spiller) {
		var vm = this;

		//variable to hide/show elements of the view
		// differentiates between create or edit pages
		vm.type = 'edit';

		// get the spiller data for spiller
		// $routeParams is the way we grab data from the URL
		Spiller.get($routeParams.spiller_id)
			.success(function(data) {
				vm.spillerData = data;
			});

			// function to save the spiller
			vm.saveSpiller = function() {
				vm.message = "";

				// call the spillerService function to update
				Spiller.get($routeParams.spiller_id, vm.spillerData)
					.success(function(data) {

						// clear the form
						vm.spillerData = {};
						$location.path('/spillere')
						// bind the message from our API
						vm.message = data.message;
					});
			};
	})



