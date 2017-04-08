
// lists the set of JSON files that have been defined
const JSONList = ["songs1.json", "songs2.json"];
var JSONsLoaded = 0;
var loadThisFile;
var allLoaded = false;

var songListContainer = document.getElementById("songListContainer");

var idCounter = 0;







	// var songString = "";
	// var currentSong;

	// songString = "";
	// for (var i=0; i<songsData.length; i++) {
	// 	currentSong = songsData[i];

	// 	songString += `<h1 class="songTitle">${currentSong.name}</h1>`;
	// 	songString += `<p class="songCredit">${currentSong.artist} | ${currentSong.album} | `;
	// 	songString += `${currentSong.genre }`;
	// }
	// songString += `<div><button type="more" id="moreButton" value="More">More</button></div>`;

	// songListContainer.innerHTML = songString;

	//***************************************************
	// Event Handler for <More> button
	//***************************************************
	// var moreButton = document.getElementById("moreButton");

// 	moreButton.addEventListener("click", function() {
// 	    if (!allLoaded) { 
// 	    	loadJSON(loadNextJSONFile());
// 	    } else {
// 	    	alert("All songs have been loaded");
// 	    }
// 	});
// }
var songs = [];

$.ajax({
	url: "songs1.json"
}).done(function(data){
	buildSongsArray(data.songs1);
}).fail( function (error) {
	console.log("whoops! some kind of error happening here ...");
}).always( function (){
	// doSomething();
});


//***************************************************
// Set of functions to execute XHR Requests
// to load JSON files
//***************************************************
// function parseSongsJSON(){

// 	var data = JSON.parse(this.responseText);

// 	var arrayIdentifier = "songs" + JSONsLoaded;
// 	data = data[arrayIdentifier];

// 	data.forEach(each => each.id = getID());
//     data.forEach(each => songs.push(each));

//***************************************************
// Function writes contents of <songs> array to the DOM
//***************************************************
// $.each (songs, function (index,value) {
// 	index += 1;
// 	$("#songListContainer").append(`<h1 class="songTitle">${value.name}</h1>`);
// 	$("#songListContainer").append(`<p class="songCredit">${value.artist} | ${value.album} | ${value.genre }`);
	
// });
// $("#songListContainer").append(`<div><button type="more" id="moreButton" value="More">More</button></div>`);
	// writeToDOM(songs);
// var songData = {}

function writeToDOM(songsArray) {
console.log("writingToDom / data :: ", songsArray);
$.each (songsArray, function (index,value) {
	index += 1;
	$("#songListContainer").append(`<h1 class="songTitle">${value.name}</h1>`);
	$("#songListContainer").append(`<p class="songCredit">${value.artist} | ${value.album} | ${value.genre }`);
	
});
$("#songListContainer").append(`<div><button type="more" id="moreButton" value="More">More</button></div>`);
	// writeToDOM(songs);
}


function buildSongsArray(data) {

	data.forEach(each => each.id = getID());
    data.forEach(each => songs.push(each));

    // write the <songs> array to the DOM
	writeToDOM(songs);
console.log("songs :: ", songs);
}

function getID () {
    var currID = idCounter;
    idCounter++;
    return currID;
}

// 	var sTitle;
// 	var sArtist;
// 	var sAlbum;
// 	var sGenre;
// console.log("buildingSongsArray / data :: ", data);
// $.each (data, function (index,value) {
// 	index += 1;
	// sTitle = ${value.name};
// 	sTitle = $(name).val();
// console.log("sTitle :: ", sTitle);
// 	sArtist = $(artist).val();
// 	sAlbum = $(album).val();
// 	sGenre = $(genre).val();

// 	songData.name = sTitle;
// 	songData.artist = sArtist;
// 	songData.album = sAlbum;
// 	songData.genre = sGenre;
// 	songs.push(songData);
// 	console.log("songs :: ", songs);
	// $("#songListContainer").append(`<h1 class="songTitle">${value.name}</h1>`);
	// $("#songListContainer").append(`<p class="songCredit">${value.artist} | ${value.album} | ${value.genre }`);
	
// });
// }






