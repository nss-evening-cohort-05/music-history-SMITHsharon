
var songListContainer = document.getElementById("songListContainer");
var songs = [];
var idCounter = 0;


//***************************************************
// 4. Must add each string to the DOM in index.html in the main content area.
// What is hard-coded goes away entirely.
//***************************************************

function writeToDOM (songsData) {
console.log("songsData :: ", songsData);
	var songString = "";
	var currentSong;

	// if multiple files, this would be generalized 
	// to append correct number to the *songs* strong
	// if (parsed === 1) {
	// 	songsArray = "songs1";
	// } else { // second call
	// 	songsArray = "songs2";
	// }

// var tempSong = document.getElementsByClassName("songTitle")[i];
// var tempCredit = document.getElementsByClassName("songCredit")[i];

	songString = "";
	for (var i=0; i<songsData.length; i++) {
		currentSong = songsData[i];

		songString += `<h1 class="songTitle">${currentSong.name}</h1>`;
		songString += `<p class="songCredit">${currentSong.artist} | ${currentSong.album} | `;
		songString += `${currentSong.genre }`;
	}
	songString += `<div><button type="more" id="moreButton" value="More">More</button></div>`;
	// songString += `</section>`;

	songListContainer.innerHTML = songString;

//***************************************************
// Event Handler for <More> button
//***************************************************
var moreButton = document.getElementById("moreButton");

moreButton.addEventListener("click", function() {
    loadJSON ("songs2.JSON", 2);
});
}


//***************************************************
// Function pushes the set of data parsed from JSON file
// to <songs> array
//***************************************************
// function pushSongsArray(tempSongs) {
// console.log("tempSongs :: ", tempSongs);
// console.log("parsed :: ", parsed);

	// if multiple files, this would be generalized 
	// to append correct number to the *songs* strong
	// if (parsed === 1) {
	// 	songsArray = "songs1";
	// } else { // second call
	// 	songsArray = "songs2";
	// }

// console.log("JSONdata.songsArray :: ", JSONdata.songsArray);

// 	for (var i in tempSongs) {
// 		songs.push(tempSongs[songs1][i]);
// 	}
// }


//***************************************************
// Set of functions to execute XHR Requests
// to load JSON files
//***************************************************
function parseSongsJSON(){

	// var tempSongsArray = [];

	// console.log("It worked!!!", this.responseText);
	var data = JSON.parse(this.responseText);
console.log("It worked!!! :: data :: ", data);
	// let data = JSON.parse(this.responseText);
	data = data.songs1;

// console.log("data :: ", data);
	data.forEach(each => each.id = getID());
    data.forEach(each => songs.push(each));

	writeToDOM(songs);
}


function getID () {
    var currID = idCounter;
    idCounter++;
    return currID;
}


function executeThisCodeIfFileFails(){
	console.log("XHR Request fail ... ");
}


function loadJSON (jsonFile) {

	var myRequest = new XMLHttpRequest();

	myRequest.addEventListener("load", parseSongsJSON);
	myRequest.addEventListener("error", executeThisCodeIfFileFails);
	myRequest.open("GET", jsonFile);
	myRequest.send();
}

// loadJSON("songs1.JSON");

function loadNextJSONFile () { 

    if (JSONList.length > JSONsLoaded) { 
        loadThisFile = JSONsLoaded;
        JSONsLoaded++;
        return JSONList[loadThisFile];

    } else {
        return null;
    }
}

// lists the set of JSON files that have been defined
const JSONList = ["songs1.json", "songs2.json"];
var loadThisFile;
var JSONsLoaded = 0;

loadJSON(loadNextJSONFile());


//***************************************************
// Event Handler for <More> button
//***************************************************
// var moreButton = document.getElementById("moreButton");

// moreButton.addEventListener("click", function() {
//     loadJSON ("songs2.JSON", 2);
// });


