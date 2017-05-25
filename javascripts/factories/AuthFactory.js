app.factory("AuthFactory", function($q, $http, $rootScope, FIREBASE_CONFIG) {

	let currentUserData = null;

	// Firebase: Determine if user is authenticated
	let isAuthenticated = () => {
		return firebase.auth().currentUser ? true : false;
	};


	// Firebase: Return email, UID for user that is currently logged in
	let getUser = () => {
		return firebase.auth().currentUser;
	};


	// Kills browser cookie with firebase credentials
	let logout = () => {
		firebase.auth().signOut();
	};


	// Firebase: Use Input credentials to anthenticate user
	let authenticate = (credentials) => {

		return $q ((resolve, reject) => {
			firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password).then((resultz) => {
					resolve(resultz);
				}).catch((error) => {
					reject(error);

			});
		});
	};


	// Register a new user w email and password
	let registerWithEmail = (user) => {

		return $q ((resolve, reject) => {
console.log("registeringWithEmail / user", user);
			firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
			.then((resultz) => {
console.log("resultz :: ", resultz);
				resolve(resultz);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};


	// Firebase: GOOGLE - Use input credentials to authenticate user
	let authenticateGoogle = () => {

		return $q ((resolve, reject) => {
			var provider = new firebase.auth.GoogleAuthProvider();
			firebase.auth().signInWithPopup(provider)
			.then((authData) => {
				currentUserData = authData.user;
				resolve(currentUserData);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};


	return { isAuthenticated:isAuthenticated, getUser:getUser, logout:logout, registerWithEmail:registerWithEmail, authenticate:authenticate, authenticateGoogle:authenticateGoogle };


});