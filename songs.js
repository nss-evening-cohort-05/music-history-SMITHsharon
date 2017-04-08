
// questions
// how to generalize loading multiple JSON files
// jquery array methods
// why is jQuery better for writing to the DOM than JavaScript? 
//   Does not seem to sve that many lines of code?
// Why is the Delete button wrapping?
// How to get the ID# of Delete item <=> tied to array index
// the Form is a mess : / 
//   How to generate a form using jQuery? 
//   How to get the values from the form, write to the array? 
//   Why is <List><writeToDOM> not listing the <songs> array?


// lists the set of JSON files that have been defined
// const JSONList = ["songs1.json", "songs2.json"];
	
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
	$("#songsListContainer").html("");
	$.each (songsArray, function (index,value) {
		index += 1;
		$("#songsListContainer").append(`<h1 id=${index} class="songTitle">${value.name}</h1>`);
		$("#songsListContainer").append(`<p class="songCredit">${value.artist} | ${value.album} | ${value.genre }`);
		$("#songsListContainer").append(`<button type="button" id="deleteButton" value="delete">Delete</button></p>`);
	});
	$("#songsListContainer").append(`<div><button type="button" id="moreButton" value="more">More</button></div>`);

	$("button#moreButton").on("click", function(){
		// load the second JSON file
		secondLoadJSON();
	});

	$("button#deleteButton").on("click", function(){

		songs.splice(($(this).attr('id'))-1, 1);

		// var delIndex = $(this).attr("id");
		// var delIndex = this.id;
		// console.log("delIndex :: ", delIndex);
		// delIndex--; // array index is off by one
		// songs.splice(delIndex, 1);
		// songs.splice(this.id-1, 1);
		writeToDOM(songs);
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

var idCounter = 0;
function getID () {
    var currID = idCounter;
    idCounter++;
    return currID;
}

// loadJSON(JSONList[0]);

