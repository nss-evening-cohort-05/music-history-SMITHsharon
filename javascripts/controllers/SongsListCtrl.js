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



	$scope.editSong = (id) => {

console.log("in editSong from Pencil click / id :: ", id);
		// SongFactory.getSingleSong($routeParams.id)
		// SongFactory.getSingleSong(id)
	.then((results) => {
		$scope.newSong = results.data;
	})
	.catch((error) => {
		console.log("error in getSingleSong", error);
	});
	};




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