myApp.controller('SearchController', ['$http', function ($http) {
	const self = this;
	self.searchHello = function(){
		console.log('I am in the search controller');

	};

	self.whoAmI = 'In Search! :)';
	self.searchHello();


	self.newEmployee = {};
	self.employees = [];

	// self.addEmployee = function (employee) {
	// 	$http.post('/employees', employee)
	// 		.then(function (response) {
	// 			console.log('post response', response);
	// 			self.newEmployee = {};
	// 		})
	// 		.catch(function (response) {
	// 			console.log('error on post', response);
	// 		});
	// }
}]);