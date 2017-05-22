app.factory("SongFactory", function($http, $q, FIREBASE_CONFIG) {


	let getSongList = () => {

		let songz = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/songs.json`)
			.then((fbSongs) => {
				var songCollection = fbSongs.data;
				if (songCollection !== null) {
					Object.keys(songCollection).forEach((key) => {
						songCollection[key].id = key;
						songz.push(songCollection[key]);
					});
				}
				resolve(songz);
			})
			.catch((error) => {
				reject(error);

			});
		});
	};



	let getSingleSong = (id) => {

		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/songs/${id}.json`)
			.then((resultz) => {
				resultz.data.id = id;
				resolve(resultz);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};



	let postNewSong = (newSong) => {

		return $q((resolve, reject) => {
			$http.post(`${FIREBASE_CONFIG.databaseURL}/songs.json`, JSON.stringify(newSong))
			.then((resultz) => {
				resolve(resultz);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};



	let editSong = (thisSong) => {

		return $q((resolve, reject) => {
			$http.put(`${FIREBASE_CONFIG.databaseURL}/songs/${thisSong.id}.json`, JSON.stringify({
				album: thisSong.album,
				artist: thisSong.artist,
				song: thisSong.song,
				genre: thisSong.genre
			}))
			.then((resultz) => {
				resolve(resultz);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};



	let deletz = (id) => {

		return $q((resolve, reject) => {
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/songs/${id}.json`)
			.then((resultz) => {
				resolve(resultz);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};


	return {getSongList:getSongList, getSingleSong:getSingleSong, postNewSong:postNewSong, editSong:editSong, deletz:deletz};

});