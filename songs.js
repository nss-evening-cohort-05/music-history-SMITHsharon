
// lists the set of JSON files that have been defined
const JSONList = ["songs1.json", "songs2.json"];
var JSONsLoaded = 0;
var loadThisFile;
var allLoaded = false;

var songListContainer = document.getElementById("songListContainer");
var songs = [];
var idCounter = 0;


//***************************************************
// Function writes contents of <songs> array to the DOM
// Establishes Event Listener for the <More> button
// that is dynamically written
//***************************************************
function writeToDOM (songsData) {
console.log("writoToDOM");
	var songString = "";
	var currentSong;

	songString = "";
	for (var i=0; i<songsData.length; i++) {
		currentSong = songsData[i];

		songString += `<h1 class="songTitle">${currentSong.name}</h1>`;
		songString += `<p class="songCredit">${currentSong.artist} | ${currentSong.album} | `;
		songString += `${currentSong.genre }`;
	}
	songString += `<div><button type="more" id="moreButton" value="More">More</button></div>`;

	songListContainer.innerHTML = songString;

	//***************************************************
	// Event Handler for <More> button
	//***************************************************
	var moreButton = document.getElementById("moreButton");

	moreButton.addEventListener("click", function() {
	    if (!allLoaded) { 
	    	loadJSON(loadNextJSONFile());
	    } else {
	    	alert("All songs have been loaded");
	    }
	});
}



//***************************************************
// Set of functions to execute XHR Requests
// to load JSON files
//***************************************************
function parseSongsJSON(){

	var data = JSON.parse(this.responseText);

	var arrayIdentifier = "songs" + JSONsLoaded;
	data = data[arrayIdentifier];

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


function loadNextJSONFile () { 

    if (JSONList.length > JSONsLoaded) { 

        loadThisFile = JSONsLoaded;
        JSONsLoaded++;

        if (JSONList.length === JSONsLoaded) {
        	allLoaded = true;
        }
        return JSONList[loadThisFile];

    } else {
        return true; // all (2) files have been loaded;
    }
}

loadJSON(loadNextJSONFile());


