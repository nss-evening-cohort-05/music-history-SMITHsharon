app.controller("SongsListCtrl", function($rootScope, $scope, SongFactory) {

	$scope.songs = [];

	let getSongs = () => {

		// calling getUser to get the userId is technically better then using $rootScope
		SongFactory.getSongList($rootScope.user.uid)
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


	$scope.inputChange = (song) => {

		SongFactory.editSong(song)
		.then(() => {
			//
		})
		.catch((error) => {
			console.log("error in inputChange", error);
		});
	};


});