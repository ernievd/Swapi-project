myApp.controller('FavoritesController', ['$http', function ($http) {
	const self = this;

	self.favoritesHello = function(){
		console.log('I am in the favorites controller');

	};
	self.favoritesHello();
	self.whoAmI = 'In Favorites! :)';

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