app.controller("SongViewCtrl", function($RouteParams, $scope, $SongFactory) => {

	$scope.selectedSong = {};

	SongFactory.getSingleSong($routeParams.id)
	.then((results) => {
		$scope.selectedSong = results.data;
	})
	.catch((error) => {
		console.log("error in getSingleSong", error);
	});

});