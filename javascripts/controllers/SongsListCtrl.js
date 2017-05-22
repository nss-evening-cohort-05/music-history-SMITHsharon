app.controller("SongsListCtrl", function($scope, SongFactory) {

	$scope.songs = [];

	let getSongs = () => {

		SongFactory.getSongList()
		.then((songz) => {
			$scope.songs = songz;
console.log("$scope.songs :: ", $scope.songs);
		})
		.catch((error) => {
			console.log("error in getSongList", error);
		});
	};

	getSongs();



	$scope.editSong = (id) => {

		console.log("in editSong from Pencil click");
	};



	$scope.deleteSong = (id) => {

		SongFactory.deletz(id)
		.then(() => {
			getSongs();
		})
		.catch((error) => {
			console.log("error in deleteSong", error);
		});
	};


});