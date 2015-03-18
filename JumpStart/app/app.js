
(function(){

	var app = angular.module('customerApp', ['ngRoute']);

	app.config(function($routeProvider){

		$routeProvider
			.when('/',
				  {
				  	 controller: 'CustomersController',
				  	 templateUrl: '../app/common/views/customers.html'
				  })
			.otherwise( { redirectTo: '~/app/index.html' } );

	});

})();
