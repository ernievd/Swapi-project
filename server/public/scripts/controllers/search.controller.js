myApp.controller('SearchController', ['$http', function ($http) {
	const self = this;

	self.searchHello = function(){
		console.log('I am in the search controller');

	};



	self.newSwapi = {};
	self.swapiSearch = {};



	self.addToFavorites = function (swapiData, category) {
		swapiData.category = category;
		console.log('in addSwapi... swapi data is -', swapiData)
		$http.post('/search', swapiData)
			.then(function (response) {
				console.log('swapi post response', response);
				self.newSwapi = {};
			})
			.catch(function (response) {
				console.log('error on swapi post', response);
			});
	}; //End addToFavorites



	// self.searchText="";
	//

	 self.searchApi = function(category, keyWord){
		 console.log('searchstrings are  :',category + " " + keyWord);
		 $http.get(`https://swapi.co/api/${category}/?search=${keyWord}`).then(function(response){
			 console.log('search response ', response);
			 self.apiResponse = response;
		 });

	    // self.showFlag = false;
	    // self.showFlag = true;
	    // console.log(self.showFlag);
	}; //End of searchAPI


	console.log('end of search controller');


}]);