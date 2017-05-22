app.controller("SongEditCtrl", function($location, $routeParams, $scope, SongFactory) {

	$scope.newAddress = {};

	SongFactory.getSingleSong($routeParams.id)
	.then((results) => {
		$scope.newAddress = results.data;
	})
	.catch((error) => {
		console.log("error in getSingleSong", error);
	});


	$scope.addNewSong = () => {

		SongFactory.editSong($scope.newSong)
		.then(() => {
			$location.url('/songs/list');
		})
		.catch((error) => {
			console.log("error in addNewSong for Edit Song", error);
		});
	};


});