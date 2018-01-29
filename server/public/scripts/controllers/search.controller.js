myApp.controller('SearchController', ['$http', function ($http) {
	const self = this;

	self.searchHello = function(){
		console.log('I am in the search controller');

	};

	self.whoAmI = 'In Search! :)';
	self.searchHello();


	self.newSwapi = {};
	self.employees = [];



	self.addSwapi = function (swapiData) {
		console.log('in addSwapi... swapi data is -', swapiData)
		$http.post('/search', swapiData)
			.then(function (response) {
				console.log('swapi post response', response);
				self.newSwapi = {};
			})
			.catch(function (response) {
				console.log('error on swapi post', response);
			});
	};


	self.getSwapi = function(){
	 	$http.get('/search')
	 		.then (function (response) {
				console.log('Received swapi data response -', response);
				self.swapiData = response.data;

				// let totalSalary = 0;
				// self.maxSalary = self.employeeData[0].salary
				// self.lowestSalary = self.employeeData[0].salary;
			})
			.catch (function (response) {
				console.log('swapi error on get request')
			})
	};
	self.getSwapi();

}]);