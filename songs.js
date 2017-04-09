
var songs = []; // array will hold the songs data loaded in from JSON files

//***************************************************
// execute XHR request on first JSON file
//***************************************************
$.ajax({
	url: "songs1.json"
}).done(function(data){
	buildSongsArray(data.songs1);
}).fail( function (error) {
	console.log("whoops! some kind of error happening here ...");
});


//***************************************************
// execute XHR request on second JSON file
//***************************************************
function secondLoadJSON() {
	$.ajax({
		url: "songs2.json"
	}).done(function(data){
		buildSongsArray(data.songs2);
	}).fail( function (error) {
		console.log("whoops! some kind of error happening here ...");
	});
}


//***************************************************
// write contents of <songs> array to the DOM
// and create event listeners for <More> and <Delete> buttons
//***************************************************
function writeToDOM(songsArray) {
	$("#songsListContainer").html("");
	$.each (songsArray, function (index,value) {
		index += 1;
		$("#songsListContainer").append(`<h1 class="songTitle">${value.name}</h1>`);
		$("#songsListContainer").append(`<p class="songCredit">${value.artist} | ${value.album} | ${value.genre }`);
		$("#songsListContainer").append(`<button type="button" class="deleteButton" id=${index-1} value="delete">Delete</button></p>`);
	});
	$("#songsListContainer").append(`<div><button type="button" id="moreButton" value="more">More</button></div>`);
}


//***************************************************
// event listener for <More> button
//***************************************************
$('body').on("click", "#moreButton", function(){
		// load the second JSON file
		secondLoadJSON();
});


//***************************************************
// event listener for <Delete> button
//***************************************************
$('body').on("click", "button.deleteButton", function(){
	var arrayIndex = $(this).attr('id');
	songs.splice(arrayIndex, 1);
	writeToDOM(songs);
});


//***************************************************
// push songs from <json> file to <songs> array
// then write the <songs> array to the DOM
//***************************************************
function buildSongsArray(data) {
	data.forEach(each => each.id = getID());
    data.forEach(each => songs.push(each));
    // write the <songs> array to the DOM
	writeToDOM(songs);
}

var idCounter = 0;
function getID () {
    var currID = idCounter;
    idCounter++;
    return currID;
}

