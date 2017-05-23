app.controller("SongEditCtrl", function($location, $routeParams, $scope, SongFactory) {

	$scope.newSong = {};

	SongFactory.getSingleSong($routeParams.id)
	.then((results) => {
		$scope.newSong = results.data;
	})
	.catch((error) => {
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