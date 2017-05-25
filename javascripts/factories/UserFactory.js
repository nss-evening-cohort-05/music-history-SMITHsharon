app.factory("UserFactory", function($q, $http, FIREBASE_CONFIG) {

	let addUser = (authData) => {

		return $q ((resolve, reject) => {
			$http.post(`${FIREBASE_CONFIG.databaseURL}/users.json`, 
				JSON.stringify({
					uid: authData.uid,
					username: authData.username
				})
			)
			.then((storeUserSuccess) => {
				resolve(storeUserSuccess);
			})
			.catch((storeUserError) => {
				reject(storeUserError);
			});
		});
	};


	let getUser = (userId) => {
// console.log("in getUser / userId :: ", userId);
		return $q ((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/users.json?orderBy="uid"&equalTo="${userId}"`)
			.then((userObject) => {
// console.log("userObject :: ", userObject);
				let users = [];
				Object.keys(userObject.data).forEach((key) => {
					users.push(userObject.data[key]);
				});
// console.log("users[0] :: ", users[0]);
				resolve(users[0]);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	return { addUser:addUser, getUser:getUser };

});