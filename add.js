
//***************************************************
// Event Listener clears the <listSongs> view 
// (blue and yellow boxes) from the screen; 
// calls <addNewSong> which displays a simple 
// input form for user to input information for a new song; 
// the song is then added to <songs> array
//***************************************************
$("#link-add").click(function (){

  $("#songsListContainer").addClass("hidden");
  $("#bluePanel").addClass("hidden");

  $("#addSongsContainer").addClass("visible");
  $("#addSongsContainer").removeClass("hidden");

  addNewSong();
})



//***************************************************
// function adds the Song entered by user on input screen
// to <songs> array
//***************************************************
// function addThisSong (thisSong) {
// .serializeArray()
// console.log("addingThisSong");
// 	var arrayLength = songs.length;

// 	songs.push ({
// 		id: arrayLength,
// 		name: thisSong.firstChild.childNodes[0].value,
// 		artist: thisSong.firstChild.childNodes[2].value,
// 		album: thisSong.firstChild.childNodes[4].value,
// 		genre: thisSong.firstChild.childNodes[6].value
// 	});
// }


//***************************************************
// function dislays an input form for user to 
// input information about a song to add to <songs> array
//***************************************************
function addNewSong () {
 console.log("addingNewSong");
  	// $("#inputForm").append(`<div id='inputForm'><input type="text" name="name" size="60" placeholder="Song Name"><br>`);
  	// $("#inputForm").append(`<input type="text" name="artist" size="60" placeholder="Artist"><br>`);
  	// $("#inputForm").append(`<input type="text" name="album" size="60" placeholder="Album"><br>`);
  	// $("#inputForm").append(`<input type="text" name="genre" class="inputField" placeholder="Genre"><br></div>`);

  	// $("#inputForm").append('<div class="addDiv"><button type="add" id="addButton" value="Add">Add</button></div></div>');


  	$("#mainContent").append(`<div id='inputForm'><input type="text" name="name" size="60" placeholder="Song Name"><br>`);
  	$("#mainContent").append(`<input type="text" name="artist" size="60" placeholder="Artist"><br>`);
  	$("#mainContent").append(`<input type="text" name="album" size="60" placeholder="Album"><br>`);
  	$("#mainContent").append(`<input type="text" name="genre" class="inputField" placeholder="Genre"><br></div>`);

  	$("#mainContent").append('<div class="addDiv"><button type="submit" id="addButton" value="Add">Add</button></div></div>');


	//***************************************************
	// Event Handler for <Add> button
	//***************************************************
	// $("#mainContent").submit(function() {
	$("#addButton").on("click", function(){
		console.log("clicked Add button");
	  	var values = $(this).serializeArray();
	  	console.log("values :: ", values);
	  	songs.push(values);
	  	console.log("songs :: ", songs);
	  	// event.preventDefault();
	});

	writeToDOM(songs);
}

