app.controller("AuthCtrl", function($location, $rootScope, $scope, AuthFactory, UserFactory) {

	// auto logon for development
	// $scope.auth = {
	// 	email: "",
	// 	password: ""
	// };


	if ($location.path() === '/logout') {
		AuthFactory.logout();
		$rootScope.user = {};
		$location.url('/auth');
	}


	let logMeIn = () => {

		AuthFactory.authenticate($scope.auth).then((userCreds) => {

console.log("userCreds :: ", userCreds);
			return UserFactory.getUser(userCreds.uid);
		}, (error) => {
			console.log("error on authenticate", error);
		}).then((user) => {
			$rootScope.user = user;
			$location.url('/songs/list');
		}).catch((error) => {
			console.log("error on getUser", error);
		});
	};


	$scope.registerUser = () => {
		// new auth
		// add user name
		// login
		AuthFactory.registerWithEmail($scope.auth).then((didRegister) => {
// console.log("didRegister", didRegister);
			$scope.auth.uid = didRegister.uid;
			return UserFactory.addUser($scope.auth);
		}, (error) => {
			console.log("error on registerWithEmail", error);
		}).then((registerComplete) => {
			logMeIn();
		}).catch((error) => {
			console.log("error on addUser", error);
		});
	};


	$scope.loginUser = () => {
		logMeIn();
	};

});
