app.controller("SongsListCtrl", function($scope, SongFactory) {

	$scope.songs = [];

	let getSongs = () => {

		SongFactory.getSongList()
		.then((songz) => {
			$scope.songs = songz;
console.log("$scope.songs :: ", $scope.songs);
		})
		.catch((error) => {
			console.log("getSongList error", error);
		});
	};

	getSongs();


});