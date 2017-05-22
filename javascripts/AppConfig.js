app.run(function(FIREBASE_CONFIG) {
	firebase.initializeApp(FIREBASE_CONFIG);
});


app.config(function($routeProvider) {

	$routeProvider

	.when('/songs/list', {
		templateUrl: 'partials/songs-list.html',
		controller: 'SongsListCtrl'
	})
	.when('/song/add', {
		templateUrl: 'partials/song-add.html',
		controller: 'SongAddCtrl'
	})
    .when('/song/view/:id', {
      templateUrl: 'partials/view-song.html',
      controller: 'SongViewCtrl'
    })
    .when('/song/edit/:id', {
      templateUrl: 'partials/song-list.html',
      controller: 'SongEditCtrl'
    })
	.otherwise('/songs/list'); //default view
});