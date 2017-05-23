app.controller("SongsListCtrl", function($scope, SongFactory) {

	$scope.songs = [];

	let getSongs = () => {

		SongFactory.getSongList()
		.then((songz) => {
			$scope.songs = songz;
		})
		.catch((error) => {
			console.log("error in getSongList", error);
		});
	};

	getSongs();



	$scope.addNewSong = () => {

		SongFactory.editSong($scope.newSong)
		.then(() => {
			$location.url('/songs/list');
		})
		.catch((error) => {
			console.log("error in addNewSong for Edit Song", error);
		});
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