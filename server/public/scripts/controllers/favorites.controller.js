myApp.controller('FavoritesController', ['$http', function ($http) {
	const self = this;

	self.favoritesHello = function(){
		console.log('I am in the favorites controller');

	};
	self.favoritesHello();
	self.whoAmI = 'In Favorites! :)';

	self.swapiData = {};

	self.getSwapi = function(){
		$http.get('/favorites')
			.then (function (response) {
				console.log('Received swapi data response -', response);
				self.swapiData = response;
				console.log('self.swapiData is: ', self.swapiData)

				// let totalSalary = 0;
				// self.maxSalary = self.employeeData[0].salary
				// self.lowestSalary = self.employeeData[0].salary;
			})
			.catch (function (response) {
				console.log('swapi error on get request')
			})
	}; //End getSwapi



	self.removeFromFavorites = function(employeeId){
		$http.delete(`/favorites/${employeeId}`)
			.then(function(response){
				console.log('Delete Success:', response);
				self.getSwapi();
			})
			.catch(function(response){
				console.log('error on Delete', response);
			});
	}; //End delete

	self.getSwapi();

}]);