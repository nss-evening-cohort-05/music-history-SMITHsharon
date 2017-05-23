app.controller("SongAddCtrl", function($http, $location, $q, $scope, FIREBASE_CONFIG, SongFactory) {

	$scope.addNewSong = () => {

		SongFactory.postNewSong($scope.newSong)
		.then((response) => {
			$scope.newSong = {};
			$location.url("/songs/list");
		})
		.catch((error) => {
			console.log("error in addNewSong", error);
		});
	};

});