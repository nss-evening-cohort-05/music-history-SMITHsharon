
var addLink = document.getElementById("link-add");
var addView = document.getElementById("addSongsContainer");
var addSongsContainer = document.getElementById("addSongsContainer");
var bluePanel = document.getElementById("bluePanel");


//***************************************************
// Event Listener clears the List Songs view 
// (blue and yellow boxes) from the screen; 
// calls <addNewSong> which displays a simple 
// input form for user to input information for a new song; 
// the song is then added to <songs> array
//***************************************************
addLink.addEventListener("click", function() {
  listView.classList.add("hidden");

  bluePanel.classList.add("hidden");

  addView.classList.add("visible");
  addView.classList.remove("hidden");

  addNewSong();
})



//***************************************************
// function adds the Song entered by user on input screen
// to <songs> array
//***************************************************
function addThisSong (thisSong) {

	var arrayLength = songs.length;

	songs.push ({
		id: arrayLength,
		name: thisSong.firstChild.childNodes[0].value,
		artist: thisSong.firstChild.childNodes[2].value,
		album: thisSong.firstChild.childNodes[4].value,
		genre: thisSong.firstChild.childNodes[6].value
	});
}



//***************************************************
// function dislays an input form for user to 
// input information about a song to add to <songs> array
//***************************************************
function addNewSong () {
 
  	var formString = "";

	formString += `<div id="inputForm">`;
	formString += `<input type="text" name="name" size="60" placeholder="Song Name"><br>`;
	formString += `<input type="text" name="artist" size="60" placeholder="Artist"><br>`;
	formString += `<input type="text" name="album" size="60" placeholder="Album"><br>`;
	formString += `<input type="text" name="genre" class="inputField" placeholder="Genre"><br>`;
	
	formString += `<div class="addDiv"><button type="add" id="addButton" value="Add">Add</button></div></div>`;

	addSongsContainer.innerHTML = formString;

	//***************************************************
	// Event Handler for <More> button
	//***************************************************
	var addButton = document.getElementById("addButton");

	addButton.addEventListener("click", function() {
	    // addThisSong(addSongsContainer.firstChild.childNodes[0]);
	    addThisSong(addSongsContainer);
	    addNewSong();
	});
}

