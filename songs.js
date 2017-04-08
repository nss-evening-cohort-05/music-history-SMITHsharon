
// lists the set of JSON files that have been defined
const JSONList = ["songs1.json", "songs2.json"];
var JSONsLoaded = 0;
var loadThisFile;
var allLoaded = false;

var idCounter = 0;


	
var songs = [];
//***************************************************
// execute XHR request on first JSON file
//***************************************************
// function loadJSON(songs1.json) {

	$.ajax({
		url: "songs1.json"
	}).done(function(data){
		buildSongsArray(data.songs1);
	}).fail( function (error) {
		console.log("whoops! some kind of error happening here ...");
	}).always( function (){
		// doSomething();
	});
// }

function secondLoadJSON() {

	$.ajax({
		url: "songs2.json"
	}).done(function(data){
		buildSongsArray(data.songs2);
	}).fail( function (error) {
		console.log("whoops! some kind of error happening here ...");
	}).always( function (){
		// doSomething();
	});
}

// to generalize, trim off the file extension ... ???
// something like :: 
// $('#test').change(function() {

//       //something like C:\fakepath\1.html 
//     var fpath = this.value;

//     fpath = fpath.replace(/\\/g, '/');

//     var fname = fpath.substring(fpath.lastIndexOf('/')+1, fpath.lastIndexOf('.'));

//     console.log(fname);

// });


//***************************************************
// write contents of <songs> array to the DOM
//***************************************************
function writeToDOM(songsArray) {
	$("#songListContainer").html("");
	$.each (songsArray, function (index,value) {
		index += 1;
		$("#songListContainer").append(`<h1 class="songTitle">${value.name}</h1>`);
		$("#songListContainer").append(`<p class="songCredit">${value.artist} | ${value.album} | ${value.genre }`);
	});
	$("#songListContainer").append(`<div><button type="more" id="moreButton" value="More">More</button></div>`);

	$("button#moreButton").on("click", function(){
		secondLoadJSON();
	});

}

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

function getID () {
    var currID = idCounter;
    idCounter++;
    return currID;
}

// loadJSON(JSONList[0]);

