
//***************************************************
// Event Listener clears the List Songs view 
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
  	$("#form").append(`<div id='inputForm'><input type="text" name="name" size="60" placeholder="Song Name"><br>`);
  	$("#form").append(`<input type="text" name="artist" size="60" placeholder="Artist"><br>`);
  	$("#form").append(`<input type="text" name="album" size="60" placeholder="Album"><br>`);
  	$("#form").append(`<input type="text" name="genre" class="inputField" placeholder="Genre"><br></div>`);

  	$("#form").append('<div class="addDiv"><button type="add" id="addButton" value="Add">Add</button></div></div>');


  	// $("#mainContent").append(`<div id='inputForm'><input type="text" name="name" size="60" placeholder="Song Name"><br>`);
  	// $("#mainContent").append(`<input type="text" name="artist" size="60" placeholder="Artist"><br>`);
  	// $("#mainContent").append(`<input type="text" name="album" size="60" placeholder="Album"><br>`);
  	// $("#mainContent").append(`<input type="text" name="genre" class="inputField" placeholder="Genre"><br></div>`);

  	// $("#mainContent").append('<div class="addDiv"><button type="add" id="addButton" value="Add">Add</button></div></div>');


	//***************************************************
	// Event Handler for <Add> button
	//***************************************************
	$("#inputForm").submit(function() {
	  	var values = $(this).serialize();
	  	console.log("values :: ", values);
	  	event.preventDefault();
	});


	    // addNewSong();
}

